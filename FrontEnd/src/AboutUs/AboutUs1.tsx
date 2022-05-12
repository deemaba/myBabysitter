import { useEffect } from "react"
import { allElmObjAboutUs } from "./AboutUsJson"

export function AboutUs() {
    useEffect(() => {
        (document.querySelector('.aboutelm') as HTMLElement).innerHTML = allElmObjAboutUs.aboutinnerHTML

    }, [])
    return (
        <div className="Aboutall">
            <div className='aboutelm'></div>


        </div>
    )
}
