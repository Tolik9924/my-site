import axios from "axios"
import { addTodoFromDataBase, sendTodoFailure, sendTodoFromDatabase } from "../store/todoReducer"

export const fetchTodos = () => {
    return async (dispatch) => {
        await fetch("http://localhost:5000/api/messageget/gettext")
            .then(response => response.json())
            .then(json => dispatch(addTodoFromDataBase(json)))
    }
}

export const addTodo = (newItem) => {
    return (dispatch) => {
        axios.
            post("http://localhost:5000/api/messagesend/sendtext", newItem)
            .then(res => {
                dispatch(sendTodoFromDatabase(res.data.message))
                console.log(res.data.message);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)));
    }
}
