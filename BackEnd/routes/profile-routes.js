const myRepositoryFile = require('../myRepository/profile-myRepository');
const express = require('express');
const router = express.Router();
const app = express();


//Get all profile
router.get("/", async (req, res) => {
    const x = await myRepositoryFile.GetAllBabySittersProfile();
    res.send(x)
});

//.............................................................
router.post("/", async (req, res) => {
    try {
        const x = await myRepositoryFile.addbabySitterProfile(req.body);
        res.send(x);
    }
    catch (e) {
        console.log(e);

    }
});
// ...............................................................
router.get("/:locations", async (req, res) => {
    try {
        const x = await myRepositoryFile.getSearchByLocation(req.params.locations);
        res.send(x);
        // res.status(200).json({ elements: x });
        console.log(typeof (x), x, "!!!!!!!!!!!!!!!!!!!!!!!");
    } catch (e) {
        console.log(e);
        // res.sendStatus(500);
    }
});







// update person
// router.put("/:id/:didpay", async (req, res) => {

//     let isAllOK = await myRepositoryFile.updateBabySitterProfile(req.params.id, req.params.didpay);
//     if (isAllOK === true) {
//         res.send("Successfully updated")
//     }
//     else {
//         res.send("unsuccessful update")
//     }

// });
// ..................................................................
// delete person by username
// router.delete("/:id", async (req, res) => {
//     let result = await myRepositoryFile.deleteBabySitterProfile(req.params.id)

//     if (result.didwefind === true) {
//         res.send("deleted the user")

//     }
//     else {
//         res.send({ ...result, theError: "person with the provided username does not exist" })
//     }
// });


module.exports = router;