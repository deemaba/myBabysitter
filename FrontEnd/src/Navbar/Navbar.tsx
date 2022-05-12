import './Navbar.css';



export function Navbar(props: { navItems: { title: string, url: string }[] }) {
    return (
        <div className="Navbar">
            <div className='logoleft' ><a className='logohref' href='/'>
                <img className="logo" src={"./logo235.png"} alt="logo" /></a> </div>
            <div className="allItemscenter">
                <ul className="pagesItemsUl">
                    {props.navItems.map((curr, i) => (
                        <li key={i}> <a className='apagesItemsUl' href={curr.url}>{curr.title}</a></li>

                    ))}

                </ul>
            </div>
            <div className='searchright'>

            </div>

        </div>
    )
}
/*פונקצייה מיפוי*/


