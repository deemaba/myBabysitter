import { useEffect } from 'react';
import { allElmObjHome } from './HomeJason';


export function HomeElm() {
    useEffect(() => {
        (document.querySelector('.homeinnerelm') as HTMLElement).innerHTML = allElmObjHome.homesinnerHTML
    }, [])

    return (
        <div className="Homeallin">
            <div className='homeinnerelm'></div>
        </div>
    )
}
