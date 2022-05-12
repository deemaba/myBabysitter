import { activityArr } from './Activityarr';
import './ActivityCard.css'

export function Activitycard() {
    const activityCardArr = [...activityArr]
    return (
        <div className='activitycardall'>
            {activityCardArr.map((curr, i) => (
                <div className='activitycard' key={i}>
                    <img className='imgactivitycard' src={curr.picture} alt="img" />
                    <h5 className='titleactivitycard'>{curr.title}</h5>
                    <p className='pactieitycard'>{curr.description}</p>
                </div>
            ))}
        </div>
    )
}
