import axios from "axios"
import { addTodoFromDataBase, completeAllTasks, editTodo, sendHandleToggleTodo, sendRemoveTodo, sendTodoFailure, sendTodoFromDatabase } from "../store/todoReducer"

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
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

export const handleToggleTodoPost = (id, complete) => {
    return (dispatch) => {
        axios.
            put(`http://localhost:5000/api/messageput/updatetext/${id}`, {complete})
            .then(res => {
                dispatch(sendHandleToggleTodo(res.data.text._id, res.data.text.complete))
                console.log(res.data.text);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

export const completeAllTasksPut = (id, complete) => {
    return (dispatch) => {
        axios.
            put(`http://localhost:5000/api/messageput/updatetext/${id}`, {complete})
            .then(res => {
                dispatch(completeAllTasks(res.data.text._id, res.data.text.complete))
                console.log(res.data.text);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

export const editTodoPut = (id, edit) => {
    return (dispatch) => {
        axios.
            put(`http://localhost:5000/api/messageput/updatetext/${id}`, {edit})
            .then(res => {
                dispatch(editTodo(res.data.text._id, res.data.text.edit))
                console.log(res.data.text);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

export const editTodoText = (id, text) => {
    return (dispatch) => {
        axios.
            put(`http://localhost:5000/api/messageput/updatetext/${id}`, {text})
            .then(res => {
                dispatch(editTodoText(res.data.text._id, res.data.text.text))
                console.log(res.data.text);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        axios.
            delete(`http://localhost:5000/api/messagedelete/delete_text/${id}`)
            .then(res => {
                dispatch(sendRemoveTodo(res.data.textId))
                console.log(res.data.message);
            })
            .catch(err => dispatch(sendTodoFailure(err.message)))
    }
}

