const myRepositoryFile = require('../myRepository/jobPost-myRepository');
const express = require('express');
const router = express.Router();
const app = express();


//Get all profile
router.get("/", async (req, res) => {
    try {
        const x = await myRepositoryFile.GetAllJobPost();
        res.send(x);
    }
    catch (e) {
        console.log(e);

    }

});
// ----------------------------------------------------------
router.post("/", async (req, res) => {
    try {
        const x = await myRepositoryFile.addJobPost(req.body);
        res.send(x);
    }
    catch (e) {
        console.log(e);

    }
});

module.exports = router;