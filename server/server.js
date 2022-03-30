const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const messageRouter = require('./routes/message-send.routes');
const messageGetRouter = require('./routes/message-get.routes');
const messagePutRouter = require('./routes/message-put.routes');
const messageDeleteRouter = require('./routes/message-delete.routes');
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/messagesend", messageRouter);
app.use("/api/messageget", messageGetRouter);
app.use("/api/messageput", messagePutRouter);
app.use("/api/messagedelete", messageDeleteRouter);


const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT);
        });
    } catch (e) {
        console.log(e.message);
    }
}

start();
