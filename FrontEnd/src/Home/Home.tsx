import { HomeElm } from './Home1'
import './Home.css';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import IconsSection from './IconsSection/IconsSection';
export function Home() {
    return (
            <div className='Homeall' >
                <ImageCarousel/>
                <IconsSection/>
            </div>
    )
}
