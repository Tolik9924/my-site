import React from 'react';

import style from './TodoList.module.css';

const TodoList = ({
    todo,
    toggleTask,
    removeTask
}) => {

    return(
        <div key={todo.id} className={style.itemTodo}>
            <div
                className={todo.complete ?  style.strike : style.itemText}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className={style.itemDelete} onClick={() => removeTask(todo.id)}>
               X 
            </div>
        </div>
    );
}

export default TodoList;
