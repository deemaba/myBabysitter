import { useEffect } from "react"
import { allElmObjPostAJob } from "./PostAJob"
import './JobPanel.css';

export function JobPanel() {
    useEffect(() => {
        (document.querySelector('.postAJobinnerelm') as HTMLElement).innerHTML = allElmObjPostAJob.postajobinnerHTML
    }, [])

    return (
        <div className="PostAjobllin">
            <div className='postAJobinnerelm'></div>
        </div>
    )
}