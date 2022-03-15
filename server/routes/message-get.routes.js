const Router = require("express");
const Message = require("../models/Message");
const router = new Router();

router.get('/gettext', async (req, res, next) => {
    Message.find({}, (err, message) => {
        if(err) return res.send(err);
        res.send(message);
    })
        
});

module.exports = router;
