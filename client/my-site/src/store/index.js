import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "./todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todos: todosReducer
});

export const storeTodo = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
