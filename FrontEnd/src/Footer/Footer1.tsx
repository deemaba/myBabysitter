import './Footer.css';

export function Footer1(props: { footerItems: { title: string, url: string }[], footerSocial: { Icon: JSX.Element, url: string }[], footerCopyright: { discraption: string }[] }) {

    return (
        <div className="Footer">
            <div className="allItems">
                <ul className="pagesItemsUl">
                    {props.footerItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}> {curr.title} </a></li>
                    ))}
                </ul>
            </div>
            <div className="social">
                <div className='followus'>Follow Us</div>
                <ul className="socialItemsUl">
                    {props.footerSocial.map((curr, i) => (
                        <li key={i}> <a href={curr.url}> {curr.Icon}</a></li>
                    ))}
                </ul>
            </div>
            <div className="copyrightall">
                <ul className="copyrightUl">
                    {props.footerCopyright.map((curr, i) => (
                        <li key={i}>{curr.discraption}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
/*MAP- פונקצייה שמבצעת מיפוי- היא עוברת על המערך וכל פעם יש את המישהו הנוכחי ואנחנו אומרים 
לה מה תעשה עם הנוכחי
key-ערך ייחודי כי ריאקט דורשת אם יש לנו רשימה שיהיה לכלפריט יהיה ערך מיוחד*/
