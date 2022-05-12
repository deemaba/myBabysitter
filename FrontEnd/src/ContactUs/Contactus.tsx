import './ContactUs.css'
import { Contactusmain } from './Contactusmain'
import { contactUsArr } from './ContactusArr';

export function Contactus() {
    return (
        <div className="cotactaroundall">
            <Contactusmain contactItem={contactUsArr} />
        </div>
    )
}
