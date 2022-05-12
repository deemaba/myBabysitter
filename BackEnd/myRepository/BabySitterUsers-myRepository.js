const connectionhelper = require('../connetToDB')

function getBabysitterByUsername(username) {

    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`SELECT * FROM mybabysitterusers WHERE userName ='${username}'`, (err, rows) => {
            if (!err) {
                console.log('The data from mybabysitterusers table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            if (Object.keys(rows).length > 0) {
                console.log(rows, "from line 25")
                resolve(true)
            }
            else {
                console.log(rows, " from line 30")
                resolve(false)
            }
        })
    })
}


exports.getBabysitterByUsername = getBabysitterByUsername
// -------------------------------------------------------------------
function addbabySitter(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query('INSERT INTO mybabysitterusers(firstName,lastName,userName, password,birthday,gender,userType,mobilePhone) VALUES(?,?,?,?,?,?,?,?)', [req.firstName, req.lastName, req.userName, req.password, req.birthday, req.gender, req.userType, req.mobilephone], (err, rows) => {
            if (!err) {
                console.log('The data from mybabysitterusers table are: \n', rows);
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
            resolve(rows)

        })
    })
}
exports.addbabySitter = addbabySitter





// const addbabySitter = async (user) => {
//     console.log("--", JSON.stringify(user));
//     const newbabySitterUser = new babySitterUser(user);
//     const x = await newbabySitterUser.save();
//     console.log(`newbabySitterUser ${JSON.stringify(x)}`);
//     return (`added newbabySitterUser with username ${x.username}`);
// };
// exports.addbabySitter = addbabySitter;
// //------------------------------------------
// const GetAllBabySitters = async () => {
//     const x = await babySitterUser.find();
//     console.log(`getAllBabySitter ${JSON.stringify(x)}`);
//     return JSON.parse(JSON.stringify(x));
// };
// exports.GetAllBabySitters = GetAllBabySitters;
// //------------------------------------------

// const deleteBabySitterByusername = async (theUserName) => {
//     const x = await babySitterUser.deleteOne({ username: theUserName });
//     console.log(`deleteUserByUsername ${JSON.stringify(x)}`);
//     return (`deleted ${x.n} documents`);
// };
// exports.deleteBabySitterByusername = deleteBabySitterByusername;
// // ============================================================

// const updateBabySitter = async (userName, userInfo) => {
//     const x = await babySitterUser.updateOne({ username: userName, ...userInfo, didpay: true });
//     console.log(`updateUserByusername ${JSON.stringify(x)}`);
//     return JSON.stringify(x);
// };
// exports.updateBabySitter = updateBabySitter;
// //------------------------------------------

// const getBabysitterByUsername = async (theUserName) => {
//     const x = await User.findOne({ username: theUserName });
//     console.log(x);
//     return x;
// };
// exports.getBabysitterByUsername = getBabysitterByUsername;
// //------------------------------------------