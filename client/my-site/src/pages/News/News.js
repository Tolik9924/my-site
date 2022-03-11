import React, { useState } from 'react';
import { messageSend } from '../../actions/messageSend';
import Input from '../../components/Input/Input';

const News = () => {
    const [message, setMessage] = useState("");

    return (
        <div>
            <Input value={message} setValue={setMessage} type="text" placeholder="Input text" />
            <button onClick={() => messageSend(message)}>send</button>
        </div>
    );
}

export default News;
