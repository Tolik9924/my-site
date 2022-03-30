const Router = require("express");
const Message = require("../models/Message");
const router = new Router();

router.get('/gettext', async (req, res, next) => {
    Message.find({}, (err, message) => {
        if(err) return res.send(err);
        res.send(message);
    })
        
});

router.get('/getsingletext/:id', async (req, res, next) => {
    try {
        let text = await Message.findById(req.params.id);

        if(!text) {
            return res.json({
                message: "Message ID doesn't exist"
            });
        } else {
            res.json(text);
        }
    } catch(e) {
        res.send(e);
    }
})

module.exports = router;
