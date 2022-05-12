const connectionhelper = require('../connetToDB');
const socket = (io) => {
    io.on('connection', (client) => {
        console.log(`Client ${client.id} Connected`);
        io.to(client.id).emit('id', client.id);
        client.on('disconnect', () => {
            console.log(`Client ${client.id} Disconnected`);
        });
        client.on('message', async (message) => {
            console.log(`Message: ${message.text}, Id: ${message.id}, Time: ${message.time}`);
            let y = await connectionhelper.connectionfun()
            y.query(`INSERT INTO chat(id,text,time,isReceived) VALUE(${message.id},'${message.text}','${message.time}',${message.isReceived});`, (err, rows) => {
                if (err) {
                    console.log("there was an error while sending query to"
                        + " db to get the mybabysitterusers details by uname and pass", err)
                    y.release()
                    console.log("Message not sent!");
                } else {
                    y.release()
                    client.broadcast.emit('message', message);
                }
            })
        })
    });
}
module.exports = socket;