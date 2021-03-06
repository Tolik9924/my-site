import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import messageReducer from './messageReducer';

const rootReducer = combineReducers({
    message: messageReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
