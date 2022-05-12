const connectionhelper = require('../connetToDB');
const getChat = async (req, res) => {
    let y = await connectionhelper.connectionfun()
    y.query(`SELECT * FROM chat`, (err, rows) => {
        if (err) {
            console.log("there was an error while sending query to"
                + " db to get the mybabysitterusers details by uname and pass", err)
            y.release()
            res.send([]);
        } else {
            console.log("myCheckUserPasswordService - rtnd rows ", rows)
            y.release()
            console.log(rows);
            res.send(rows);
        }
    })
}
exports.getChat = getChat;