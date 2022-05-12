import React from 'react';

export function Contactusmain(props: { contactItem: { Icon: JSX.Element, url: string, discreption: string }[] }) {
    return (
        <div className="cotactaround">
            <div className='contactUsTitle'>
                <h2>Our staff is available to respond to your needs.</h2>
                <h2> We strive to provide the highest quality customer service.</h2></div>
            <ul className="contactItemsUl">
                {props.contactItem.map((curr, i) => (
                    <li key={i}> <a href={curr.url}> {curr.Icon}</a>{curr.discreption}</li>
                ))}
            </ul>
        </div>
    )
}


