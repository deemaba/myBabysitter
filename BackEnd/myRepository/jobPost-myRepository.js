const connectionhelper = require('../connetToDB')

function GetAllJobPost() {

    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`SELECT * FROM jopposts`, (err, rows) => {
            if (!err) {
                console.log('The data from jopposts table are: \n', rows)
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


exports.GetAllJobPost = GetAllJobPost
// --------------------------------------------------------------------------------
function addJobPost(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query('INSERT INTO jopposts(parentName,parentImage,JobOfer) VALUES(?,?,?)', [req.parentName, req.parentImage, req.JobOfer], (err, rows) => {
            if (!err) {
                console.log('The data from jopposts table are: \n', rows);
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
exports.addJobPost = addJobPost