const myRepositoryFile = require('../myRepository/MyRepository');
const chat = require('../myRepository/chat');
const express = require('express');
const router = express.Router();
const app = express();





router.post("/Login", myRepositoryFile.signIn);
router.get('/getchat', chat.getChat);



//--------------------------------------
// Get all people
// router.get("/", async (req, res) => {
//     const x = await myRepositoryFile.GetAllBabySitters();
//     res.send(x)
// });

//--------------------------------------
// Get a person by username
// router.get("/:username", async (req, res) => {
//     try {
//         const x = await myRepositoryFile.getBabysitterByUsername(req.params.username);
//         res.send(x);
//         // res.status(200).json({ elements: x });
//         console.log(typeof (x), x, "!!!!!!!!!!!!!!!!!!!!!!!");
//     } catch (e) {
//         console.log(e);
//         // res.sendStatus(500);
//     }
// });

//--------------------------------------
// Add new person
router.post("/", async (req, res) => {
    try {
        const x = await myRepositoryFile.addbabySitter(req.body);
        res.send(x);
    }
    catch (e) {
        console.log(e);

    }
});

// -------------------------------------------------
// router.post("/", async (req, res) => {
//     let isAllOK = await myRepositoryFile.addbabySitter(req.body);
//     if (isAllOK === true) {
//         res.send("added new person");
//     }
//     else {
//         res.send("unsuccessful adding new person");
//     }
// });

//--------------------------------------
// update person
// router.put("/:username/:didpay", async (req, res) => {

//     let isAllOK = await myRepositoryFile.updateBabySitter(req.params.username, req.params.didpay);
//     if (isAllOK === true) {
//         res.send("Successfully updated")
//     }
//     else {
//         res.send("unsuccessful update")
//     }

// });

// ======================================================
//--------------------------------------
// delete person by username
// router.delete("/:username", async (req, res) => {
//     let result = await myRepositoryFile.deleteBabySitterByusername(req.params.username)

//     if (result.didwefind === true) {
//         res.send("deleted the user")

//     }
//     else {
//         res.send({ ...result, theError: "person with the provided username does not exist" })
//     }
// });


module.exports = router;

