export const defaultState = {
    todos: [],
    error: null
}

const HANDLE_TOGGLE_TODO = "HANDLE_TOGGLE_TODO";
const ADD_TODO_FROM_DATABASE = "ADD_TODO_FROM_DATABASE";
const SEND_TODO_FROM_DATABASE = "SEND_TODO_FROM_DATABASE";
const SEND_TODO_FAILURE = "SEND_TODO_FAILURE";
const SEND_HANDLE_TOGGLE_TODO = "SEND_HANDLE_TOGGLE_TODO";
const SEND_REMOVE_TODO = "SEND_REMOVE_TODO";
const EDIT_TODO = "EDIT_TODO";
const EDIT_TODO_TEXT = "EDIT_TODO_TEXT";
const COMPLETE_ALL_TASKS = "COMPLETE_ALL_TASKS";

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
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
        case SEND_HANDLE_TOGGLE_TODO:
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo._id === action.payload ? { ...todo, complete: !todo.complete } : { ...todo }
                )
            }
        case SEND_REMOVE_TODO:
            return { ...state, todos: state.todos.filter((todo) => todo._id !== action.payload) };
        case EDIT_TODO:
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo._id === action.payload ? { ...todo, edit: !todo.edit } : { ...todo }
                )
            }
        case EDIT_TODO_TEXT:
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo._id === action.payload ? { ...todo, text: action.newText } : { ...todo }
                )
            }
        case COMPLETE_ALL_TASKS:
            return {
                ...state, todos: state.todos.map((todo) =>
                    todo._id === action.payload ? { ...todo, complete: true } : { ...todo }
                )
            }
        default:
            return state;
    }
}

export const handleToggleTodo = (payload) => ({type: HANDLE_TOGGLE_TODO, payload});
export const addTodoFromDataBase = (payload) => ({type: ADD_TODO_FROM_DATABASE, payload});
export const sendTodoFromDatabase = (payload) => ({type: SEND_TODO_FROM_DATABASE, payload});
export const sendTodoFailure = (payload) => ({type: SEND_TODO_FAILURE, payload});
export const sendHandleToggleTodo = (payload) => ({type: SEND_HANDLE_TOGGLE_TODO, payload});
export const sendRemoveTodo = (payload) => ({type:  SEND_REMOVE_TODO, payload});
export const editTodo = (payload) => ({type: EDIT_TODO, payload});
export const editTodoText = (payload, newText) => ({type: EDIT_TODO_TEXT, payload, newText});
export const completeAllTasks = (payload) => ({type: COMPLETE_ALL_TASKS, payload});
