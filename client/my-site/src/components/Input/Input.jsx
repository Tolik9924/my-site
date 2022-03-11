import React from 'react';

const Input = ({
    type,
    placeholder,
    value,
    setValue
}) => {
    return(
        <div>
            <input onChange={(event) => setValue(event.target.value)}
                   type={type} 
                   placeholder={placeholder} 
                   value={value}/>
        </div>
    );
}

export default Input;
