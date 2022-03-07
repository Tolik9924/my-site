import React, { useState } from 'react';

import style from './TodoForm.module.css'

const TodoForm = ({
    addTask
}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSubmit(event);
        }
    }

    return (
        <form className={style.formAdd} onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Input value..."
                className={style.inputTask}
            />
            <button className={style.buttonAdd}>Add</button>
        </form>
    );
}

export default TodoForm;
