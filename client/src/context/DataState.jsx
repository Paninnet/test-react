import { useEffect, useReducer } from "react"
import { dataContext } from "./dataContext"
import { CHANGE_INPUT, CHANGE_SELECT, dataReducer, GET_FROM_STORAGE, SEND_INPUT } from "./dataReducer"

export const DataState = ({ children }) => {

    const inithialState = {

        input: "",

        todoList: [
        ],

        selectedList: [
            "None", "In Progress", "Need Review", "Done"
        ],

        status: "None"

    }

    const [state, dispatch] = useReducer(dataReducer, inithialState)

    const changeInput = (newText) => {
        dispatch({ type: CHANGE_INPUT, newText })
    }

    const sendInput = () => {

        const currentDate = new Date()

        const Year = currentDate.getFullYear();
        const Month = currentDate.getMonth();
        const Day = currentDate.getDate();
        const Hour = currentDate.getHours();
        const Minutes = currentDate.getMinutes();
        const Time = currentDate.getTime()

        const payload = { body: state.input, date: `${Hour}:${Minutes} ${Year}.${Month + 1}.${Day}`, Time, status: "None" }
        localStorage.setItem(payload.Time, JSON.stringify(payload))
        dispatch({ type: SEND_INPUT, payload })
    }

    const changeSelect = (select, id) => {
        dispatch({ type: CHANGE_SELECT, select, id })
    }

    useEffect(() => {
        const endValues = []
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        while (i--) {
            values.push(localStorage.getItem(keys[i]));
            endValues.push((JSON.parse(values)));
            values.splice(0,1)
        }
        console.log(endValues);
        dispatch({type:GET_FROM_STORAGE, endValues})
    }, [])

    return (
        <dataContext.Provider value={{ state, changeInput, sendInput, changeSelect }}>
            {children}
        </dataContext.Provider>
    )
}