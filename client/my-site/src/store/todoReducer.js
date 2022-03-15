const defaultState = {
    todos: [],
    error: null
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const HANDLE_TOGGLE_TODO = "HANDLE_TOGGLE_TODO";
const ADD_TODO_FROM_DATABASE = "ADD_TODO_FROM_DATABASE";
const SEND_TODO_FROM_DATABASE = "SEND_TODO_FROM_DATABASE";
const SEND_TODO_FAILURE = "SEND_TODO_FAILURE";

export const todosReducer = (state = defaultState, action) => {
    console.log(Object.values(state.todos));
    switch (action.type) {
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo._id !== action.payload) };
        case HANDLE_TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo._id === action.payload ? { ...todo, complete: !todo.complete } : { ...todo }
                )
            }
        case ADD_TODO_FROM_DATABASE:
            return { ...state, todos: [...state.todos, ...action.payload] }
        case SEND_TODO_FROM_DATABASE:
                return { ...state, todos: [...state.todos, action.payload] }
        case SEND_TODO_FAILURE:
            return { ...state, error: action.payload.error }
        default:
            return state;
    }
}

export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload});
export const handleToggleTodo = (payload) => ({type: HANDLE_TOGGLE_TODO, payload});
export const addTodoFromDataBase = (payload) => ({type: ADD_TODO_FROM_DATABASE, payload});
export const sendTodoFromDatabase = (payload) => ({type: SEND_TODO_FROM_DATABASE, payload});
export const sendTodoFailure = (payload) => ({type: SEND_TODO_FAILURE, payload});
