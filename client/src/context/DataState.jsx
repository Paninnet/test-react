import { useReducer } from "react"
import { dataContext } from "./dataContext"
import { CHANGE_INPUT, CHANGE_SELECT, dataReducer, SEND_INPUT } from "./dataReducer"

export const DataState = ({ children }) => {

    const inithialState = {

        input: "",

        todoList: [
            // { body: "add new task", date: "monday", status: "None" },
            // { body: "next task", date: "t", status: "None" },
        ],

        selectedList: [
            "None" ,"In Progress","Need Review","Done"
        ],

        status : "None"

    }

       const allStorage = () => {

        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        console.log(values);
        return values;
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
        // const Milliseconds = currentDate.getMilliseconds()


        const payload = { body: state.input, date: `${Hour}:${Minutes} ${Year}.${Month + 1}.${Day}`, Time, status: "None" }
        localStorage.setItem(payload.Time ,JSON.stringify(payload))
        dispatch({ type: SEND_INPUT, payload })
        allStorage()
    }

    const changeSelect = (select, id) => {
        console.log(select)
        dispatch({type:CHANGE_SELECT, select,id})
    }

    return (
        <dataContext.Provider value={{ state, changeInput, sendInput, changeSelect }}>
            {children}
        </dataContext.Provider>
    )
}