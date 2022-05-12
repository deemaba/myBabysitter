import React from 'react'
/*פונקציה לאייקונים שנמצאים בפוטר  */

export default function NavFootIcon(props: { navItems: { Icon: JSX.Element, title: string, url: string }[], logoImageUrl: string }) {
    return (
        <div>
            <ul className="pagesItemsUl">
                {props.navItems.map((curr, i) => (
                    <li key={i}> <a href={curr.url}>{curr.title} {curr.Icon} </a></li>
                ))}
            </ul>
        </div>
    )
}