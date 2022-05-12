import { useEffect } from "react"
import { allElmObjPostYourProfile } from "./PostYourProfile";
import './PostYourProfile.css';

export function PostYourProfile() {
    useEffect(() => {
        (document.querySelector('.postYourProfileinnerelm') as HTMLElement).innerHTML = allElmObjPostYourProfile.postprofileinnerHTML
    }, [])

    return (
        <div className="Postprofilellin">
            <div className='postYourProfileinnerelm'></div>
        </div>
    )
}