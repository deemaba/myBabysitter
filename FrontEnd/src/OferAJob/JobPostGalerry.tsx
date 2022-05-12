import React, { useState, useEffect } from "react";
import axios from "axios";
import './Jobcard.css';

export function JobPostGallery() {
    const [shouldReloadJobPost, setShouldReloadJobPost] = useState(true);
    const [jobPostArr, setjobPostArr] = useState(
        [
            {
                id: 0,
                parentName: "",
                JobOfer: "",
                parentImage: "",

            }]);
    const url = 'http://localhost:3001/jobPost';


    function paraentUpdateFunction(id: number) {
        const updateUrl = url + `/${id}`;
        axios.put(updateUrl)
            .then(res => {
                console.log(res);

            })
            .catch((eror) => {
                console.log(eror);

            })
        window.location.reload();

    }

    function DeletBabysitter(id: number) {
        axios.delete(url + "/" + id)
            .then(response => {
                console.log(response.data);
                setjobPostArr(response.data.jobPostArr);
                setShouldReloadJobPost(false);
                return "hello"
            })
            .then((str) => {
                setTimeout(() => { setShouldReloadJobPost(true) }, 1)

            })
        window.location.reload();

    }


    useEffect(() => {
        console.log("Welcome");
        axios.get(url)
            .then(res => {
                setjobPostArr(res.data);

            });
    }, []);

    return (
        <div className="cardjob">
            {jobPostArr && shouldReloadJobPost && <div >
                {jobPostArr.map((curr, i) => {
                    console.log("-----------");
                    console.log(curr);
                    console.log("-----------");

                    return <CardJob key={i} {...curr} paraentDeleteFunction={DeletBabysitter}
                        shouldReloadBabySitter={shouldReloadJobPost} ></CardJob>;
                })}
            </div >}
        </div>
    );
}


const CardJob = (props: {
    shouldReloadBabySitter: boolean,
    paraentDeleteFunction: (id: number) => void,
    id: number,
    parentName: string,
    JobOfer: string,
    parentImage: string,


}) => {

    const url = 'http://localhost:3001/jobPost';
    return (<div className="CardJoball">
        <div className="CardJob">
            <ul >
                <li> <img className="imageParent" alt="" src={props.parentImage}></img></li>
                <li> {props.parentName} </li>
                <li>{props.JobOfer} </li>


                <div>
                    <button className='deletebtn' type='submit' onClick={() => { props.paraentDeleteFunction(props.id) }} >Delete </button></div>
            </ul>
        </div>

    </div>)


}


