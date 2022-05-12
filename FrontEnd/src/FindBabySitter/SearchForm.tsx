import axios from "axios";
import { useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
    const navigate = useNavigate();
    let [data, setData] = useState([{
        firstName: "",
        lastName: "",
        Bio: "",
        languages: "",
        locationsForWork: "",
        TypeOfWork: "",
        yearsExperience: "",
        ChildrenPrefer: "",
        FirstAid: "",
        smoke: "",
        occasionalWeekends: "",
        travelWithTheFamily: "",
        drivingLicence: "",
        swim: "",
        workWithPets: "",
        allergies: "",
        relevantInformation: "",
        imageBabysitter: "",

    }]);
    let [receve, setReceve] = useState(false);
    let [noResult, setNoResult] = useState(false);
    function MySearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("hello");
        let formDataSearch = new FormData(e.target as HTMLFormElement);
        console.log(formDataSearch.get("locations"));
        let locations = `${((document.querySelector('.locations')) as HTMLInputElement).value}`
        const url = 'http://localhost:3001/profile/' + locations;
        axios.get(url)
            .then(response => {
                if (response.data.length > 0) {
                    let babySitterArr = []
                    for (let i = 0; i < response.data.length; i++) {
                        babySitterArr[i] = response.data[i];
                    }
                    console.log(babySitterArr);

                    setData(babySitterArr);
                    setReceve(!receve)
                    setNoResult(false)
                }
                else {
                    setNoResult(!noResult)
                    setReceve(false)
                }


            });

    }


    return (
        <div className='searchall'>
            <form onSubmit={(e) => { MySearch(e) }} className='formsearch'>
                <legend> Find The Best Babysitter</legend>
                <div className="allsearch">
                    <div className='Locationall'>
                        <label >Location<TiLocationOutline></TiLocationOutline></label>
                        <select name="locations" className='locations'>
                            <option value=""></option>
                            <option value="Yarka">Yarka</option>
                            <option value="Rama">Rama</option>
                            <option value="Haifa">Haifa</option>
                            <option value="Akko">Akko</option>
                            <option value="Tel-Aviv">Tel-Aviv</option>
                            <option value="Zefat">Zefat</option>
                            <option value="kiryatshmona">kiryat shmona</option>
                            <option value="Eilat">Eilat</option>
                        </select>
                    </div>
                    <div className='searchbottonall'>
                        <input type="submit" value="search" className="buttonsearch" />
                    </div>
                </div>
            </form>
            {receve &&
                data.map((curr, i) => {
                    return <CardPerson key={i} {...curr}></CardPerson>
                })}

            {noResult && <div className="noresultdiv"><span className="noresultspan">Your search did not match any babySitter results </span> </div>}
        </div>

    )
}
function CardPerson(props: {
    firstName: string,
    lastName: string,
    Bio: string,
    languages: string,
    locationsForWork: string,
    TypeOfWork: string,
    yearsExperience: string,
    ChildrenPrefer: string,
    FirstAid: string,
    smoke: string,
    occasionalWeekends: string,
    travelWithTheFamily: string,
    drivingLicence: string,
    swim: string,
    workWithPets: string,
    allergies: string,
    relevantInformation: string,
    imageBabysitter: string,

}) {
    return (<div className="CardPersonall">
        <ul >
            <li><img className="imageBabysittersearch" alt="" src={props.imageBabysitter}></img></li>
            <li> {props.firstName} {props.lastName}</li>
            <li> {props.Bio}</li>


        </ul>


    </div>)
}



