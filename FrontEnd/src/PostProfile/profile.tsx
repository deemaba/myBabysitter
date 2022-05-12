import axios from 'axios';
import { useEffect } from 'react';
import './profile.css'
export function Profile() {

    const url = 'http://localhost:3001/profile';
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
            });
    }, []);
    function myProfile(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("hello");
        var formDataprofile = new FormData(e.target as HTMLFormElement);
        console.log(formDataprofile.get("fname"));
        const newbabysitterprofile = {
            firstName: formDataprofile.get('fname'),
            lastName: formDataprofile.get('lname'),
            Bio: formDataprofile.get('bio'),
            // profileImg: formDataprofile.get('ImgProfile'),
            languages: formDataprofile.get('languages'),
            locationsForWork: formDataprofile.get('locationsForWork'),
            // CV: formDataprofile.get('CV'),
            TypeOfWork: formDataprofile.get('Typeofwork'),
            yearsExperience: formDataprofile.get('experience'),
            ChildrenPrefer: formDataprofile.get('Howmanychildren'),
            FirstAid: formDataprofile.get('FirstAid'),
            smoke: formDataprofile.get('smoke'),
            occasionalWeekends: formDataprofile.get('weekends'),
            travelWithTheFamily: formDataprofile.get('travel'),
            drivingLicence: formDataprofile.get('drivinglicence'),
            swim: formDataprofile.get('swim'),
            workWithPets: formDataprofile.get('pets'),
            allergies: formDataprofile.get('allergies'),
            relevantInformation: formDataprofile.get('relevantinformation'),
        }
        console.log(formDataprofile);
        console.log(newbabysitterprofile);

        axios.post(url,
            newbabysitterprofile
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }






    return (
        <div className='registerbabysitterall'>
            <form onSubmit={(e) => { myProfile(e) }} className='formbabysitterregister'>
                <div className="Profileall">
                    <legend className='titlel'>Post Your profile </legend>
                    <label>Name</label>
                    <div className="firstandlastname">
                        <input type="text" className="fname" name="fname" placeholder="First" />
                        <input type="text" className="lname" name="lname" placeholder="Last" />
                    </div>
                    <label>Bio</label>
                    <div className='biotext'>
                        <textarea className='bio-textarea'
                            placeholder=""
                            name="bio"
                            required
                        ></textarea></div>
                    {/* <label>Upload Your Image</label>
                    <div className="ImageProfile">
                        <input type="file" className="ImgProfile" name="ImgProfile" placeholder="ImgProfile" />
                    </div> */}
                    <label > Are you fluent in any of these languages? </label>
                    <div className=' languageall'>
                        <select name="languages" className=" languages">
                            <option value=""></option>
                            <option value="English">English</option>
                            <option value="Hebrew">Hebrew</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Russian">Russian</option>
                            <option value="French">French</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <label>In which location are you looking for work?</label>
                    <div className=' locationstext'>
                        <select className=' locations-textarea' name='locationsForWork'>
                            <option value=""></option>
                            <option value="Yarka">Yarka</option>
                            <option value="Rama">Rama</option>
                            <option value="Haifa">Haifa</option>
                            <option value="Akko">Akko</option>
                            <option value="Tel-Aviv">Tel-Aviv</option>
                            <option value="Zefat">Zefat</option>
                            <option value="kiryatshmona">kiryat shmona</option>
                            <option value="Eilat">Eilat</option>
                        </select></div>
                    {/* <label>Upload your CV</label>
                    <div className="CV">
                        <input type="file" className="CV" name="CV" placeholder="CV" />
                    </div> */}
                    <label>Type of work you are interested in</label>
                    <div className="TypeofworkAll">
                        <select name="Typeofwork" className=" Typeofwork">
                            <option value=""></option>
                            <option value="Live-in">Live-in</option>
                            <option value="Live-out">Live-out</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Temporary">Temporary</option>
                            <option value="Permanent">Permanent</option>
                        </select>
                    </div>
                    <div> <label >About you</label></div>
                    <label > Number of years experience in professional childcare</label>
                    <div className=' experienceall'>
                        <select name="experience" className=" experience">
                            <option value="Choose one">Choose one</option>
                            <option value="less than 2 years">less than 2 years</option>
                            <option value="2 years (minimum)">2 years (minimum)</option>
                            <option value="up to 3 years">up to 3 years</option>
                            <option value="up to 5 years">up to 5 years</option>
                            <option value="over 5 years">over 5 years</option>
                        </select>
                    </div>
                    <label > How many children in a family do you prefer?</label>
                    <div className=' Howmanychildrenall'>
                        <select name="Howmanychildren" className="Howmanychildren">
                            <option value="Choose one">Choose one</option>
                            <option value="One child only">One child only</option>
                            <option value="Up to two children">Up to two children</option>
                            <option value="Up to three children">Up to three children</option>
                            <option value="Up to four children">Up to four children</option>
                        </select>
                    </div>
                    <label > Do you hold a current First Aid Certificate?</label>
                    <div className=' FirstAidall'>
                        <select name="FirstAid" className="FirstAid">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label > Do you smoke?</label>
                    <div className=' smokeall'>
                        <select name="smoke" className="smoke">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label > Would you be prepared to work occasional weekends if requested?</label>
                    <div className='weekendsall'>
                        <select name="weekends" className="weekends">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label >Would you be prepared to travel with the family?</label>
                    <div className=' travelall'>
                        <select name="travel" className="travel">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label >Do you hold a full driving licence</label>
                    <div className=' drivinglicenceall'>
                        <select name="drivinglicence" className="drivinglicence">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label > Can you swim?</label>
                    <div className=' swimall'>
                        <select name="swim" className="swim">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label > Can you work with pets in the home?</label>
                    <div className='petsall'>
                        <select name="pets" className="pets">
                            <option value="Choose one">Choose one</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <label> Please state if you have any allergies:</label>
                    <div className='allergies'>
                        <textarea placeholder="" name="allergies" className="allergies" required></textarea>
                    </div>
                    <label>Please tell us about any other requirements or relevant information</label>
                    <div className=' relevantinformation'>
                        <textarea className=' relevantinformation-textarea'
                            placeholder=""
                            name="relevantinformation"
                            required
                        ></textarea></div>
                    <div className='buttomsub'>
                        <input type="submit" value="Submit" className="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}
