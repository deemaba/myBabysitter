import axios from 'axios';
import { useEffect } from 'react';
import './OferAJob.css'

export function OferAJob() {
    const url = 'http://localhost:3001/jobPost';
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
            });
    }, []);
    function JobPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("hello");
        var formDataJobPost = new FormData(e.target as HTMLFormElement);
        console.log(formDataJobPost.get("fname"));
        const newJobPost = {
            parentName: formDataJobPost.get('name'),
            JobOfer: formDataJobPost.get('message'),
            imageParent: formDataJobPost.get('imageparent')

        }
        console.log(formDataJobPost);
        console.log(newJobPost);

        axios.post(url,
            newJobPost
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }




    return (
        <div className="oferajoball">
            <div
                className="leftSide"
            ></div>
            <div className="rightSide">
                <h1> Ofer A Job</h1>

                <form onSubmit={(e) => { JobPost(e) }} className="oferajob-form" >
                    <label >Name</label>
                    <input name="name" placeholder="" type="text" />
                    <label >Job</label>
                    <textarea className='oferajob-textarea'
                        placeholder=""
                        name="message"
                        required
                    ></textarea>

                    <button className='submitJob' type="submit"> Send</button>
                </form>
            </div>
        </div>
    );
}
