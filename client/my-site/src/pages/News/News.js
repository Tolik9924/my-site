import React, { useState, useEffect } from 'react';
import { messageGet, messageSend } from '../../actions/messageSend';
import Input from '../../components/Input/Input';

const News = () => {
    const [message, setMessage] = useState("");
    const [text, setText] = useState();

    const fetchData = async () => {
        const data = await fetch("http://localhost:5000/api/messageget/gettext")
        const message = await data.json()
        console.log(message);
        setText(message)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(!text) {
        return <div>Loading</div>
    }

    return (
        <div>
            <Input value={message} setValue={setMessage} type="text" placeholder="Input text" />
            <button onClick={() => messageSend(message)}>send</button>
            <div>{text && text.map((el) => el.text)}</div>
        </div>
    );
}

export default News;
