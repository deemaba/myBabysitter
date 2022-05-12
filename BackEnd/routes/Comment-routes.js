const myRepositoryFile = require('../myRepository/Comment-myRepository');
const express = require('express');
const router = express.Router();
const app = express();

router.post("/:username/:id/:comment", async (req, res) => {

    try {
        console.log(req.params, "$$$$$$$$$$");
        const x = await myRepositoryFile.AddCommentToCard(req.params)
        console.log(x, "the sen from post user...");
        res.send(x);
    } catch (e) {
        console.log(e);

    }


})

router.get("/:id", async (req, res) => {
    // console.log("from line 70" , req);
    try {
        const x = await myRepositoryFile.GetCommentsByPostId(req.params.id);
        // console.log(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});



module.exports = router;