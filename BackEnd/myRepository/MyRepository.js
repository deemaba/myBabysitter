const connectionhelper = require('../connetToDB')
const jwt = require('jsonwebtoken');
const jwtKey = 'my_secret_key';
const jwtExpiryTimeInMilliSeconds = 1000 * 60 * 15; // 15 min

// function AddItemToCart(TheReqBody) {
//     return new Promise(async (resolve, reject) => {
//         let y
//         try {
//             y = await connectionhelper.connectionfun()
//         }
//         catch (err) {
//             reject("connection not successful myCheckUserPasswordService ", err)
//         }
//         y.query(`INSERT INTO solditems(Item_id,Cart_id) VALUES (?,?)`, [TheReqBody.itemid, TheReqBody.cartnum], (err, rows) => {
//             if (!err) {
//                 y.release()
//                 resolve("successfully added item to cart")
//             } else {
//                 console.log(err)
//                 y.release()
//                 reject(err);
//             }
//         })
//     })
// }
// exports.AddItemToCart = AddItemToCart
//--------------------------------------------------------
function myCheckUserPasswordService(username, password) {
    return new Promise(async (resolve, reject) => {
        try {
            let y = await connectionhelper.connectionfun()
            y.query(`SELECT * FROM mybabysitterusers WHERE userName ='${username}' and password='${password}' `, (err, rows) => {
                if (err) {
                    console.log("there was an error while sending query to"
                        + " db to get the mybabysitterusers details by uname and pass", err)
                    y.release()
                    reject(err);
                } else {
                    console.log("myCheckUserPasswordService - rtnd rows ", rows)
                    y.release()
                }
                if (Object.keys(rows).length > 0) {
                    console.log('Found data for the provided uname and pass: ', rows)
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        }
        catch (err) {
            reject("myCheckUserPasswordService error: ", err)
        }
    })
}
exports.myCheckUserPasswordService = myCheckUserPasswordService
//---------------------------------------------------------------------
// const getCustIdByName = async (username) => {
//     return new Promise(async (resolve, reject) => {
//         let y
//         try {
//             y = await connectionhelper.connectionfun()
//         }
//         catch (err) {
//             reject("getCustIdByName - connection to DB not successful ", err)
//         }
//         y.query(`SELECT id FROM customers WHERE Cust_name = '${username}'`, (err, rows) => {
//             if (err) {
//                 console.log("getCustIdByName - there was an error while sending query to"
//                     + " db to SELECT id FROM customers WHERE Cust_name", err)
//                 y.release()
//                 reject(err);
//             } else {
//                 console.log("getCustIdByName - rtnd rows ", rows)
//                 y.release()
//             }
//             if (Object.keys(rows).length === 1) {
//                 console.log("getCustIdByName - rtnd rows ", rows)
//                 resolve(rows[0].id)
//             }
//             else {
//                 reject(`getCustIdByName - error - more than one users with the same username ${username}`)
//             }
//         })
//     })
// }
// exports.getCustIdByName = getCustIdByName
//---------------------------------------------------------------
// const getCartForTheUser = async (username) => {
//     console.log("1) inside getCartForTheUser");
//     return new Promise(async (resolve, reject) => {
//         try {
//             console.log("2) inside getCartForTheUser");
//             let y = await connectionhelper.connectionfun()
//             y.query(`SELECT carts.id 
//                         FROM carts JOIN customers
//                             ON carts.customer_id = customers.id
//                         WHERE customers.cust_name ='${username}' and Is_cart_open= 1`, async (err, rows) => {
//                 if (err) {
//                     console.log('getCartForTheUser - error while query: ', err)
//                     y.release()
//                     reject(err);
//                 } else {
//                     console.log("3) inside getCartForTheUser");
//                     console.log("getCartForTheUser - rtnd rows: ", rows)
//                     //if the user already has a cart we return it
//                     if (Object.keys(rows).length === 1) {
//                         console.log("getCartForTheUser - rtnd num of rows= ", Object.keys(rows).length);
//                         // "cleaning" from the row, getting only the cart id
//                         console.log("getCartForTheUser - rtnd rows[0].id: ", rows[0].id)
//                         y.release()
//                         resolve(rows[0].id)
//                     }
//                     else if (Object.keys(rows).length > 1) {
//                         y.release()
//                         reject("getCartForTheUser - more than one open carts for the user")
//                     }
//                     //if we got here it means the user does not have cart lets create one 
//                     else {
//                         console.log("4) inside getCartForTheUser, going to create new cart");
//                         let x = await getCustIdByName(username)
//                         y.query('INSERT INTO Carts (Customer_id, Is_cart_open) VALUES(?,?)', [`${x}`, 1], (err, rows) => {
//                             if (err) {
//                                 console.log("getCartForTheUser - error while query to insert cart: ", err);
//                                 y.release()
//                                 reject(err)
//                             }
//                             else {
//                                 y.release()
//                                 // returning the newly created cart id
//                                 // "cleaning" from the row, getting only the cart id
//                                 console.log("-------- getCartForTheUser - INSERTED new cart ", rows);
//                                 resolve(rows[0].id)
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//         catch (err) {
//             reject("myCheckUserPasswordService error:  ", err)
//         }
//     })
// }
// exports.getCartForTheUser = getCartForTheUser
//---------------------------------------------------------------------//   creates and returns jwt token 
//     (only if username, password match our records)
const signIn = async (req, res) => {
    // Get credentials (username and password) from JSON body
    //   and use our service to check if they are OK
    const { username, password } = req.body;
    const isPassOK = await myCheckUserPasswordService(username, password);
    if (!isPassOK) {
        // return 401 error if authentication not OK  
        return res.status(401).send("username or password didnt match the info we have");
    }
    // once we got here, we know that a user with the provided uname and pass exists in the db,
    //          lets get a cart for him 
    // let cartnum
    // try {
    //     console.log("signIn - going to try to get a cart for the user");
    //     let resultFromGetCartForTheUser = await getCartForTheUser(username);
    //     cartnum = resultFromGetCartForTheUser;
    // }
    // catch (err) {
    //     console.log(`signIn - while we were waiting for getCartForTheUser there was an error:  ${err}`);
    //     return res.status(500).send("error getting a cart");
    // }

    // Create a new token with the username in the payload
    //  which expires X seconds after issue
    let token;
    try {
        let X = jwtExpiryTimeInMilliSeconds;
        token = jwt.sign({ username }, jwtKey, {
            algorithm: 'HS256',
            expiresIn: X
        })
    }
    catch (err) {
        console.log("signin - error while creating the new token: " + err);
    }
    console.log('signin - successfully creaeted token:', token);

    // set a cookie named 'token' with value = the token string we created above, 
    //   with max age 
    // here, the max age is in milliseconds, so we multiply by 1000
    res.cookie('token', token, { maxAge: jwtExpiryTimeInMilliSeconds })
    res.json({ username, token });
}
exports.signIn = signIn
//------------------------------------------------------------------------------------
const refresh = (req, res) => {
    console.log("going to try to refresh the token (if there is one and it is still valid");

    let statusCode = 200 // OK
    const token = req.cookies.token;
    console.log(token, "+++++++++++++++++++++++++++++++++");

    if (!token) {
        console.log('refresh - couldnt find token in cookies');
        statusCode = 401;
        return statusCode;
    }
    // once we got here, it means we did found a token in the cookies
    let payload;
    try {
        payload = jwt.verify(token, jwtKey);
    }
    catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            console.log("refresh - jwt.JsonWebTokenError error: " + e);
            statusCode = 401
            return statusCode;
        }
        console.log('refresh - error while reading the token, but NOT a jwt.JsonWebTokenError: ', e);
        statusCode = 400;
        return statusCode;
    }

    // Once we got here it means the token was checked and is valid
    // Now, create a new token for the current user, 
    //   with a renewed expiration time
    console.log("refresh - yayyy we got payload: ", payload);
    console.log("refresh - now creating NEW TOKEN with extended time");
    const newToken = jwt.sign({ username: payload.username }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpiryTimeInMilliSeconds
    })

    // Set the new token as the users `token` cookie
    console.log(`refresh - the new refreshed token - ${newToken}`);
    res.cookie('token', newToken, { maxAge: jwtExpiryTimeInMilliSeconds })
    res.thePayload = payload;
    // once we got here it means the statusCode is still 200 (as we initialized to be)
    return statusCode; // returning 200
}
module.exports.refresh = refresh
// -----------------------------------------------------------------------------------
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

// ---------------------------------------------------------


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


