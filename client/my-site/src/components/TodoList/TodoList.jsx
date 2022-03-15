import React from 'react';

import style from './TodoList.module.css';

const TodoList = ({
    todo,
    toggleTask,
    removeTask,
}) => {

    return(
        <div key={todo._id} className={style.itemTodo}>
            <div
                className={todo.complete ?  style.strike : style.itemText}
                onClick={() => toggleTask(todo._id)}
            >
                {todo.text}
            </div>
            <div className={style.itemDelete} onClick={() => removeTask(todo._id)}>
               X 
            </div>
        </div>
    );
}

export default TodoList;
