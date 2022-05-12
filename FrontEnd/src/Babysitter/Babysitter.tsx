
import { BabySitterGallery } from './BabySitterGallery';
import { PostYourProfile } from './PostYourProfile1';
import './BabySitterCard.css';

export function Babysitter() {
    return (
        <div className='container' style={{marginTop:'20px',backgroundColor:'transparent',border:'none'}}>
            <div style={{marginTop:'50px'}}>
                <PostYourProfile /></div>
            <div className="containercards">
                < BabySitterGallery /></div>
        </div>
    )
}
