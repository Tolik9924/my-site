import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, completeAllTasksPut, editTodoPut, fetchTodos,  handleToggleTodoPost, removeTodo } from '../../asyncActions/todos';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import { editTodoText } from '../../store/todoReducer';

import style from './Todo.module.css';

const Todo = () => {
    const [completedTodo, setCompletedTodo] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
      }, []);

    const todosRedux = useSelector(state => state.todos.todos);
    console.log(todosRedux, "selector");
    
    useEffect(() => {
        let count = 0; 
        todosRedux.forEach((todo) => {
            if(todo.complete) count += 1;
        })
        setCompletedTodo(count);
      }, [todosRedux]);

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                text: userInput
            }
          dispatch(addTodo(newItem));
        }
    }

    const removeTask = (id) => {
        dispatch(removeTodo(id));
    }

    const handleToggle = (id, complete) => {
        /* dispatch(handleToggleTodo(id)); */
        dispatch(handleToggleTodoPost(id, complete));
    }

    const editTodo = (id, edit) => {
        dispatch(editTodoPut(id, edit));
    }

    const editText = (id, text) => {
        dispatch(editTodoText(id, text))
    }

    const completeAllTasks = () => {
        todosRedux.map((todo) => {
            dispatch(completeAllTasksPut(todo._id));
        })
    }

    let totalCounterTodo = todosRedux.length;

    return (
            <div>
                <header className={style.header}>
                    <h1>List of tasks: {completedTodo}/{totalCounterTodo}</h1>
                </header>
                <TodoForm addTask={addTask} completeAllTasks={completeAllTasks} />
                {todosRedux.map((todo) => {
                    return (
                        <TodoList
                            todo={todo}
                            key={todo._id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                            editTodo={editTodo}
                            editText={editText}
                        />
                    );
                })}
            </div>
    );
}

export default Todo;
