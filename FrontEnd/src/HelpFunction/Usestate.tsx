import { useEffect } from "react"
/*   היא רצה כאשר הקומפוננט סיים את הבנייה שלו בזיכרוןinnerHTMפונקציה להבאת דברים מהL*/

export function Useeffect() {
    useEffect(() => {
        (document.querySelector('.aboutelm') as HTMLElement).innerHTML = ""
    }, [])
    return (
        <div className="Aboutall">
            <div className='aboutelm'></div>


        </div>
    )
}