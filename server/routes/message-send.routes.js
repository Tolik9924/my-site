const Router = require("express");
const Message = require("../models/Message");
const router = new Router();

router.post('/sendtext', async (req, res) => {
    try {
        console.log(req.body);
        const {text} = req.body;
        const messageSend = new Message({text});
        
        await messageSend.save();
        return res.json({message: messageSend});
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});



module.exports = router;
