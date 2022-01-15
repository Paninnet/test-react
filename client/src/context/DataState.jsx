import { useEffect, useReducer } from "react"
import { dataContext } from "./dataContext"
import { CHANGE_INPUT, CHANGE_SELECT, CHANGE_SORT, dataReducer, GET_FROM_STORAGE, REMOVE_ITEM, SEND_INPUT } from "./dataReducer"

export const DataState = ({ children }) => {

    const inithialState = {

        input: "",

        todoList: [],

        selectedList: ["None", "In Progress", "Need Review", "Done"],

        sortItem : ["Old To Do", "New To Do"],

        status: ""

    }

    const [state, dispatch] = useReducer(dataReducer, inithialState)

    const changeInput = (newText) => {
        dispatch({ type: CHANGE_INPUT, newText })
    }

    const sendInput = () => {

        if (state.input.trim()) {
            const currentDate = new Date()
            const Year = currentDate.getFullYear();
            const Month = currentDate.getMonth();
            const Day = currentDate.getDate();
            const Hour = currentDate.getHours();
            const Minutes = currentDate.getMinutes();
            const Time = currentDate.getTime()
            const text = state.input.trim()

            const payload = { body: text, date: `${Hour}:${Minutes} ${Year}.${Month + 1}.${Day}`, Time, status: "None" }
            localStorage.setItem(payload.Time, JSON.stringify(payload))
            dispatch({ type: SEND_INPUT, payload })
        } else {
            alert('Add somthing')
        }
    }

    const changeSelect = (select, id ,item) => {
        const point = JSON.parse( localStorage.getItem(item.Time))
        point.status = select
        localStorage.setItem(point.Time,JSON.stringify(point))
        dispatch({ type: CHANGE_SELECT, select, id })
    }

    const changeSort = (sortType) => {
        console.log((sortType));
        if (sortType == "New To Do"){
            const sortedItem = state.todoList.sort((a, b) => (a.Time < b.Time) ? 1 : -1)
            dispatch({type:CHANGE_SORT,sortedItem})
        }else if (sortType == "Old To Do") {
            const sortedItem = state.todoList.sort((a, b) => (a.Time > b.Time) ? 1 : -1)
            dispatch({type:CHANGE_SORT,sortedItem})
        }
    }

    const remove_item = (id) => {
        localStorage.removeItem(id)
        dispatch({type:REMOVE_ITEM,id})
    }

    useEffect(() => {
        const endValues = []
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        while (i--) {
            values.push(localStorage.getItem(keys[i]));
            endValues.push((JSON.parse(values)));
            values.splice(0, 1)
        }
        endValues.sort((a, b) => (a.Time > b.Time) ? 1 : -1)

        dispatch({ type: GET_FROM_STORAGE, endValues })
    }, [])

    return (
        <dataContext.Provider value={{ state, changeInput, sendInput, changeSelect, remove_item, changeSort }}>
            {children}
        </dataContext.Provider>
    )
}