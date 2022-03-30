const Router = require("express");
const Message = require("../models/Message");
const router = new Router();

router.put('/updatetext/:id', async(req, res) => {
    try {
        let text = await Message.findById(req.params.id);

        if(!text) {
            return res.json({
                success: false,
                message: "Message ID doesn't exist"
            });
        } else {
            let updateText = await Message.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidator: true
            });

            console.log(req.body)

            res.json({
                success: true,
                message: "Message updated successfully.",
                text: updateText
            });
        }
    } catch(e) {
        res.send(e);
    }
});

module.exports = router;
