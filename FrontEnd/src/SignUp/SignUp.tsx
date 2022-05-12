import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
export function SignUp() {
    const navigate = useNavigate();
    const url = 'http://localhost:3001/user';
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
            });
    }, []);
    function mySubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("hello");
        var formDatasignup = new FormData(e.target as HTMLFormElement);
        console.log(formDatasignup.get("fname"));
        console.log(formDatasignup.get("username"));
        const newbabysitteruser = {

            firstName: formDatasignup.get('fname'),
            lastName: formDatasignup.get('lname'),
            userName: formDatasignup.get('username'),
            password: formDatasignup.get('password'),
            birthday: formDatasignup.get('birthday'),
            gender: formDatasignup.get('gender'),
            userType: formDatasignup.get('usertype'),
            mobilephone: formDatasignup.get('telNo'),
        }
        console.log(formDatasignup);
        console.log(newbabysitteruser);

        axios.post(url,
            newbabysitteruser
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("you have sign up successfully");
                navigate('/SignIn ');
            })

    }
    return (
        <div className='signupall'>
            <div style={{backgroundColor:'transparent',marginTop:'90px',border:'none'}} className='container'>
            <form onSubmit={(e) => { mySubmit(e) }} className='formsingup'>
                <div id="all">
                    <legend className='titlel'>Join The Mybabysitter </legend>
                    <label>Name</label>
                    <div id="firsttolastname">
                        <input type="text" id="fname" name="fname" placeholder="First" />
                        <input type="text" id="lname" name="lname" placeholder="Last" />
                    </div>
                    <div className='user'>
                        <label>Choose your user name</label>
                        <input type="text" id="username" name="username" placeholder="" />
                    </div>
                    <div className='pass'>
                        <label >Create a password</label>
                        <input type="password" id="password" name="password" />
                    </div >

                    <div className="selectbirthday">
                        <label >Birthday</label>
                        <input type="date" id="birthday" name="birthday"
                            min="1910-01-01" max={"2022-01-16"} />
                    </div>
                    <div className='genderall'>
                        <label >Gender</label>
                        <select name="gender" id="gender">
                            <option value="none"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='usertypeall'>
                        <label >I Am A..</label>
                        <select name="usertype" id="usertype">
                            <option value="none"></option>
                            <option value="babySitter">babySitter</option>
                            <option value="Parent">Parent</option>
                        </select>
                    </div>
                    <div className='mobileall'>
                        <label >Mobil phone</label>
                        <input id="telId" name="telNo" type="tel" placeholder="XXX-XXX-XXXX" required
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div className='buttomsub'>
                        <input type="submit" value="Submit" className="Submit" />
                    </div>
                    <div className='linktologin'>
                        <p className='para'> Already have an account?
                            <a className='alogin' href='../SignIn'>SignIn  </a>
                        </p>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
