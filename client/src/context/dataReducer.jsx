export const GET_FROM_STORAGE = "GET_FROM_STORAGE"
export const CHANGE_INPUT = "CHANGE_INPUT"
export const SEND_INPUT = "SEND_INPUT"
export const CHANGE_SELECT = "CHANGE_SELECT"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const CHANGE_SORT = "CHANGE_SORT"


export const dataReducer = (state,action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, input: action.newText}
        case SEND_INPUT:
            return {...state, todoList:[...state.todoList,action.payload],input : " "}
        case CHANGE_SELECT:
            return{...state, status:[...state.todoList[action.id].status = action.select]}
        case GET_FROM_STORAGE:
            return{...state, todoList:[...state.todoList = action.endValues]}
        case REMOVE_ITEM:
            return{...state, todoList:[...state.todoList.filter(n => n.Time !== action.id)]} 
        case CHANGE_SORT:
            return{...state,todoList:[...state.todoList = action.sortedItem]}
    
        default:
            return{...state};
    }
}