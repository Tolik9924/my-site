const Router = require("express");
const Message = require("../models/Message");
const router = new Router();

router.delete('/delete_text/:id', async (req, res) => {
    try {
        let message = await Message.findById(req.params.id);

        if(!message) {
            return res.json({
                success: false,
                message: "Message ID doesn't exist"
            });
        } else {
            await message.remove();
            res.json({
                success: true,
                message: `Message with id ${req.params.id} deleted successfully`,
                textId: req.params.id
            });

        }
    } catch(e) {
        res.send(e);
    }
});

module.exports = router;
