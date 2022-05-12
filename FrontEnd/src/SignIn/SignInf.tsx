import { Navigate, useNavigate } from 'react-router-dom';
import './SignIn.css'
export function Signin() {
    const navigate = useNavigate();

    function mylogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        postData('http://localhost:3001/user/Login', { username: `${((document.querySelector('.username')) as HTMLInputElement).value}`, password: `${((document.querySelector('.password')) as HTMLInputElement).value}` })
            .then(data => {
                console.log("login - after POST to http://localhost:3001/Login ", data);
                localStorage.setItem("username", data.username);
                document.cookie = "token=" + data.token;
                navigate("/home");
                //
            });

        async function postData(url = '', data = {}) {
            // Default options are marked with *
            let response;
            try {
                response = await fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    // redirect: 'follow', // manual, *follow, error
                    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
            }
            catch (err) {
                console.log("postData - error while sending POST ", err);
                return
            }
            return response.json(); // parses JSON response into native JavaScript objects
        }
    }
    //     let UserName = `${((document.querySelector('.username')) as HTMLInputElement).value}`
    //     const url = 'http://localhost:3001/user/' + UserName;
    //     console.log("hello");
    //     axios.get(url)
    //         .then(response => {
    //             console.log(response.data);

    //             if (response.data === true) {
    //                 console.log("YES");
    //                 navigate('/Home');


    //             }
    //             else {
    //                 console.log("NO");

    //             }


    //         })
    //  }
    if (localStorage.getItem("username") !== "") {
        localStorage.setItem("username", "")
        return (<Navigate to="/signin" />)
    }
    else {
        return (
            <div className='loginall'>
                <div style={{ marginTop: '3em' }}>
                    <form className="formlogin" onSubmit={(e) => { mylogin(e) }} >

                        <div className="alllogin">
                            <legend className='logmy'>Welcome Back To MyBabySitter!</legend>
                            <div className='signindiv'>
                                <label className='labellogin'>User name</label>
                                <input type="text" className="username" name="username" />
                            </div>
                            <div className='signindiv'>
                                <label className='labellogin'> Password</label>
                                <input type="password" className="password" name="password" />

                            </div>
                            {/* <div className='RememberMeall'>
                        Remember me<input type="checkbox" className=">RememberMe" name="RememberMe" />
                    </div> */}
                            <div className='logindiv'>
                                <input type="submit" value="login" className="login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
