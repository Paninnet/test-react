export const CHANGE_INPUT = "CHANGE_INPUT"
export const SEND_INPUT = "SEND_INPUT"
export const CHANGE_SELECT = "CHANGE_SELECT"

export const dataReducer = (state,action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, input: action.newText}
        case SEND_INPUT:
            return {...state, todoList:[...state.todoList,action.payload],input : " "}
        case CHANGE_SELECT:
            return{...state, status:[...state.todoList[action.id].status = action.select]}
    
        default:
            return{...state};
    }
}
// export const
// export const