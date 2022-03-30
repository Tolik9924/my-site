import React, { useState } from 'react';

import style from './TodoList.module.css';

const TodoList = ({
    todo,
    toggleTask,
    removeTask,
    editTodo,
    editText
}) => {
    const [editInput, setEditInput] = useState('');

    const editChange = (event) => {
        setEditInput(event.currentTarget.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editText(todo._id, editInput);
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            handleSubmit(event);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div key={todo._id} className={style.itemTodo}>
                <div
                    className={todo.complete ? style.strike : style.itemText}
                    onClick={() => toggleTask(todo._id, todo.complete)}
                >
                    {
                        todo.edit
                            ?
                            <input value={editInput}
                                type='text'
                                onChange={editChange}
                                onKeyDown={handleKeyPress}
                                placeholder="Edit value..."
                                className={style.editTask} />
                            :
                            todo.text
                    }
                </div>
                <div className={style.itemEdit} onClick={() => editTodo(todo._id, todo.edit)}>
                    edit
            </div>
                <div className={style.itemDelete} onClick={() => removeTask(todo._id)}>
                    X
            </div>
            </div>
       </form>
    );
}

export default TodoList;
