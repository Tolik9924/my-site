import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from '../../asyncActions/todos';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import { addTodosAction, handleToggleTodo, removeTodoAction, completedTodoAction} from '../../store/todoReducer';

import style from './Todo.module.css';

const Todo = () => {
    const [completedTodo, setCompletedTodo] = useState(0);

    const dispatch = useDispatch();
    const todosRedux = useSelector(state => state.todos.todos);

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
        dispatch(removeTodoAction(id));
    }

    const handleToggle = (id) => {
        dispatch(handleToggleTodo(id));
    }

    let totalCounterTodo = todosRedux.length;

    return (
            <div>
                <header className={style.header}>
                    <h1>List of tasks: {completedTodo}/{totalCounterTodo}</h1>
                </header>
                <TodoForm addTask={addTask} />
                <button className={style.showTodo} onClick={() => dispatch(fetchTodos())}>Add todos from database</button>
                {todosRedux.map((todo) => {
                    return (
                        <TodoList
                            todo={todo}
                            key={todo._id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                        />
                    );
                })}
            </div>
    );
}

export default Todo;
