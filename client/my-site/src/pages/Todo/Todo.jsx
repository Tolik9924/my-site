import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

import style from './Todo.module.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem]);
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
               todo.id === id ? { ...todo, complete: !todo.complete }  : { ...todo }
            )
        ]);
        
    }

    const doneTasks = () => {
        let done = 0;

        let todosArr = Object.entries(todos)
        for(let i = 0; i <  todosArr.length; i++) {
            if(todosArr[i][1].complete === true) {
                done += 1;
            }
        }
        return done;
    }

    return (
            <div>
                <header className={style.header}>
                    <h1>List of tasks: {doneTasks()}/{todos.length}</h1>
                </header>
                <TodoForm addTask={addTask} />
                {todos.map((todo) => {
                    return (
                        <TodoList
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                            doneTasks={doneTasks}
                        />
                    );
                })}
            </div>
    );
}

export default Todo;
