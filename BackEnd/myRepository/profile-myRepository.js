const connectionhelper = require('../connetToDB')

function GetAllBabySittersProfile() {

    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`SELECT * FROM profilepost`, (err, rows) => {
            if (!err) {
                console.log('The data from profilepost table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            if (Object.keys(rows).length > 0) {
                console.log(rows, "from line 25")
                resolve(rows, true)
            }
            else {
                console.log(rows, " from line 30")
                resolve(false)
            }
        })
    })
}


exports.GetAllBabySittersProfile = GetAllBabySittersProfile
// -------------------------------------------------------------------
function addbabySitterProfile(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query('INSERT INTO profilepost(firstName,lastName,Bio,languages,locationsForWork,TypeOfWork,yearsExperience,ChildrenPrefer,FirstAid,smoke,occasionalWeekends,travelWithTheFamily,drivingLicence,swim,workWithPets,allergies,relevantInformation) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.firstName, req.lastName, req.Bio, req.languages, req.locationsForWork, req.TypeOfWork, req.yearsExperience, req.ChildrenPrefer, req.FirstAid, req.smoke, req.occasionalWeekends, req.travelWithTheFamily, req.drivingLicence, req.swim, req.workWithPets, req.allergies, req.relevantInformation], (err, rows) => {
            if (!err) {
                console.log('The data from profilepost table are: \n', rows);
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
exports.addbabySitterProfile = addbabySitterProfile
// -----------------------------------------------------------------------
function getSearchByLocation(locations) {

    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`SELECT * FROM profilepost WHERE locationsForWork ='${locations}'`, (err, rows) => {
            if (!err) {
                console.log('The data from profilepost table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            if (Object.keys(rows).length > 0) {
                console.log(rows, "from line 25")
                resolve(rows, true)
            }
            else {
                console.log(rows, " from line 30")
                resolve(false)
            }

        })
    })
}


exports.getSearchByLocation = getSearchByLocation
// ------------------------------------------------------------------------------------
// const deleteBabySitterProfile = async (theUserName) => {
//     const x = await babySitterUser.deleteOne({ username: theUserName });
//     console.log(`deleteUserByUsername ${JSON.stringify(x)}`);
//     return (`deleted ${x.n} documents`);
// };
// exports.deleteBabySitterProfile = deleteBabySitterProfile;
// -----------------------------------------------------------------------
// const updateBabySitter = async (userName, userInfo) => {
//     const x = await babySitterUser.updateOne({ username: userName, ...userInfo, didpay: true });
//     console.log(`updateUserByusername ${JSON.stringify(x)}`);
//     return JSON.stringify(x);
// };
// exports.updateBabySitter = updateBabySitter;

