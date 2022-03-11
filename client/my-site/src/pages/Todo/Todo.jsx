import React, { useEffect, useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

import style from './Todo.module.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [completedTodo, setCompletedTodo] = useState(0);

    useEffect(() => {
        let count = 0; 
        todos.forEach((todo) => {
            if(todo.complete) count += 1;
        })
        setCompletedTodo(count);
      }, [todos]);

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

    let totalCounterTodo = todos.length;

    return (
            <div>
                <header className={style.header}>
                    <h1>List of tasks: {completedTodo}/{totalCounterTodo}</h1>
                </header>
                <TodoForm addTask={addTask} />
                {todos.map((todo) => {
                    return (
                        <TodoList
                            todo={todo}
                            key={todo.id}
                            toggleTask={handleToggle}
                            removeTask={removeTask}
                            doneTasks={completedTodo}
                        />
                    );
                })}
            </div>
    );
}

export default Todo;
