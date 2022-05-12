const connectionhelper = require('../connetToDB')

function AddCommentToCard(req) {

    return new Promise(async (resolve, reject) => {
        let y

        console.log(req, "the req from AddCommentToCard !!!!!!!!!!");

        try {
            y = await connectionhelper.connectionfun()
        }
        catch (err) {
            reject("connection not successful myCheckUserPasswordService ", err)
        }
        try {
            y.query(`INSERT INTO commentandrating(userName,postId,comment) VALUES (?,?,?)`, [req.username, req.id, req.comment], (err, rows) => {
                if (!err) {
                    y.release()
                    resolve("successfully added comment to card")

                } else {
                    console.log(err)
                    y.release()
                    reject(err);
                }
            })
        }
        catch (err) {
            console.log(err, "err from query");

        }

    })
}
exports.AddCommentToCard = AddCommentToCard
// --------------------------------------------------
function GetCommentsByPostId(theId) {
    console.log(theId, "1111111111111111111");
    return new Promise(async (resolve, reject) => {
        let y
        try {
            y = await connectionhelper.connectionfun()
        }
        catch (err) {
            reject("connection not successful myCheckUserPasswordService ", err)
        }
        console.log("yarraaa");
        try {
            console.log("mahaa");
            y.query(`SELECT * FROM commentandrating WHERE postId = '${theId}'`, (err, rows) => {
                if (!err) {
                    y.release()
                    resolve(rows)
                    console.log(rows, "hellloooooooo");
                } else {
                    console.log(err)
                    y.release()
                    reject(err);
                }
            })

        }
        catch (err) {
            console.log(err, "err from query");


        }
    })
}

exports.GetCommentsByPostId = GetCommentsByPostId;

