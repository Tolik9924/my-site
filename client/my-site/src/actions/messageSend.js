import axios from 'axios';

export const messageSend = async (text) => {
    try {
        const response = await axios.post('http://localhost:5000/api/messagesend/sendtext', {
            text
        });
        console.log(response.data.message);
    } catch (e) {
        console.log(e);
    }
}

export const messageGet = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/messageget/gettext');
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}
