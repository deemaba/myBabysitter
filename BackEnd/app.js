const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors');
const cookieParser = require('cookie-parser')
const refreshfunc = require('./myRepository/MyRepository').refresh
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    console.log("inside middleware to call refresh");
    let x = refreshfunc(req, res);
    console.log("refresh returned status = ", x);
    res.myStatusCode = x;
    next();
})
app.use('/user', require('./routes/BabySitterUsers-routes'));
app.use('/profile', require('./routes/profile-routes'));
app.use('/jobPost', require('./routes/jobPost-routes'));
app.use('/comment', require('./routes/Comment-routes'));
const socket = require('./socket/socket');



//const root = require('path').join(__dirname, 'build')
// app.use(express.static(root));
// app.get("*", cors(), (req, res) => {
//     res.sendFile('index.html', { root });
// })

//------------------------------------------------
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
socket(io);
