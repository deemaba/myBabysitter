import React, { useState, useEffect } from "react";
import axios from "axios";
import './BabySitterCard.css';
import { StarRating } from './../Rating/StarRating';
import socketClient from 'socket.io-client';
import { AiOutlineComment } from "react-icons/ai";


export function BabySitterGallery() {
    const [shouldReloadBabySitter, setShouldReloadBabySitter] = useState(true);
    const [messages, setMessages] = useState([{ id: -1, text: 'text', time: 'time', isReceived: false, socketId: '' }]);
    const [socketId, setID] = useState('');
    const [babySitterArr, setBabySitterArr] = useState(
        [
            {
                id: 0,
                firstName: "",
                lastName: "",
                Bio: "",
                languages: "",
                locationsForWork: "",
                TypeOfWork: "",
                yearsExperience: "",
                ChildrenPrefer: "",
                FirstAid: "",
                smoke: "",
                occasionalWeekends: "",
                travelWithTheFamily: "",
                drivingLicence: "",
                swim: "",
                workWithPets: "",
                allergies: "",
                relevantInformation: "",
                imageBabysitter: "",
                // didPay: false,
            }]);
    const url = 'http://localhost:3001/profile';
    const socket = socketClient('localhost:3001/');


    function paraentUpdateFunction(id: number, DidPay: boolean) {
        const updateUrl = url + `/${id}/${DidPay}`;
        axios.put(updateUrl)
            .then(res => {
                console.log(res);

            })
            .catch((eror) => {
                console.log(eror);

            })
        window.location.reload();

    }

    function DeletBabysitter(id: number) {
        axios.delete(url + "/" + id)
            .then(response => {
                console.log(response.data);
                setBabySitterArr(response.data.babySitterArr);
                setShouldReloadBabySitter(false);
                return "hello"
            })
            .then((str) => {
                setTimeout(() => { setShouldReloadBabySitter(true) }, 1)

            })
        window.location.reload();

    }


    useEffect(() => {
        console.log("Welcome");
        axios.get(url)
            .then(person => {
                setBabySitterArr(person.data);

            });
        axios.get("http://localhost:3001/user/getchat")
            .then(m => {
                setMessages(m.data);
            });
        socket.on('id', (id: string) => {
            setID(id);
        });
        socket.on('message', (message: any) => {
            setMessages((old) => [...old, { id: message.id, text: message.text, time: message.time, isReceived: true, socketId: message.socketId }]);
        });
    }, []);
    const sendMessage = (message: string, id: number) => {
        const time = (new Date).getHours().toString() + ":" + (new Date).getMinutes().toString();
        socket.emit('message', { text: message, id: id, time: time, socketId: socketId, isReceived: false });
        setMessages((old) => [...old, { id: id, text: message, time: time, isReceived: false, socketId: '' }]);
    }

    return (
        <div>
            {babySitterArr && shouldReloadBabySitter && <div className="cardprofilemap" >
                {babySitterArr.map((curr, i) => {
                    console.log("-----------");
                    console.log(curr);
                    console.log("-----------");

                    return <CardPerson key={i} {...curr} paraentDeleteFunction={DeletBabysitter}
                        shouldReloadBabySitter={shouldReloadBabySitter} paraentUpdateFunction={paraentUpdateFunction} sendMessage={sendMessage} messages={messages} setMessages={setMessages} socketId={socketId}></CardPerson>;
                })}
            </div >}
        </div>
    );
}


const CardPerson = (props: {
    shouldReloadBabySitter: boolean,
    paraentDeleteFunction: (id: number) => void,
    paraentUpdateFunction: (id: number, DidPay: boolean) => void,
    sendMessage: (message: string, id: number) => void,
    messages: Array<any>,
    setMessages: any,
    socketId: string,
    id: number,
    firstName: string,
    lastName: string,
    Bio: string,
    languages: string,
    locationsForWork: string,
    TypeOfWork: string,
    yearsExperience: string,
    ChildrenPrefer: string,
    FirstAid: string,
    smoke: string,
    occasionalWeekends: string,
    travelWithTheFamily: string,
    drivingLicence: string,
    swim: string,
    workWithPets: string,
    allergies: string,
    relevantInformation: string,
    imageBabysitter: string,
    // didPay: boolean
}) => {
    let [isOpen, setIsOpen] = useState(false);
    const [ischat, setchat] = useState(false);
    let [isOpenComments, setIsOpenComments] = useState(false);
    const url = 'http://localhost:3001/profile';
    console.log(props.id);
    let username = localStorage.getItem("username")
    console.log(username);
    const [changeComment, setChangeComment] = useState("");
    const url1 = 'http://localhost:3001/comment' + `/${props.id}`;
    let [commentsArr, setCommentsArr] = useState(
        [{
            userName: "",
            comment: "",
        }]);
    useEffect(() => {
        console.log(url1);
        axios.get(url1)
            .then(comment => {
                commentsArr = comment.data
                setCommentsArr(commentsArr);
                console.log(comment);

            });
    }, []);
    let [allCommentsOpen, setallCommentsOpen] = useState(false);
    return (
        <div className="CardPersonals" >
            <ul >
                <li><img className="card__image" alt="" src={props.imageBabysitter}></img></li>

                <li className="card__name"> {props.firstName} {props.lastName}</li>
                <div className="addratingandcomment">
                    <div className="commentcard">
                        <button onClick={() => { setIsOpenComments(!isOpenComments) }}><AiOutlineComment /></button>
                        {isOpenComments && <div>
                            <li> <textarea className="ratingtextarea"
                                placeholder="What's your experience?"
                                onChange={e => setChangeComment(e.target.value)}
                            />
                                <button className="ratingbotton" onClick={async (e) => {
                                    // const comment = `${((document.querySelector('.ratingtextarea')) as HTMLInputElement).value}`
                                    try {
                                        axios.post('http://localhost:3001/comment' + `/${username}/${props.id}/${changeComment}`)
                                        console.log(username, "!!!!!!");
                                    }

                                    catch (err) {
                                        console.log(err);
                                    }
                                }}>
                                    Add Comment
                                </button>
                            </li></div>}
                        <button className="commentsbutton" type="submit" onClick={() => { setallCommentsOpen(!allCommentsOpen) }
                        }>reviews</button>
                        {allCommentsOpen && <div className="cardcomment">
                            {commentsArr.map((curr, i) => {
                                console.log("-----------");
                                console.log(curr);

                                return <CommentCard key={i} {...curr} ></CommentCard>;
                            })}
                        </div >}
                    </div>
                    <div className="ratingcard">
                        <li> <StarRating /></li></div>
                </div>
                <li> {props.Bio} </li>
                <div className="information"><span onClick={() => { setIsOpen(!isOpen) }} >{isOpen ? "Show Less" : "Show More"}</span></div>
                {isOpen && <div>
                    Are you fluent in any of these languages?<li> {props.languages} </li>
                    In which location are you looking for work?<li> {props.locationsForWork} </li>
                    Type of work you are interested in<li> {props.TypeOfWork} </li>
                    Number of years experience in professional childcare<li> {props.yearsExperience} </li>
                    How many children in a family do you prefer?<li> {props.ChildrenPrefer} </li>
                    Do you hold a current First Aid Certificate?<li> {props.FirstAid} </li>
                    Do you smoke?<li> {props.smoke} </li>
                    Would you be prepared to work occasional weekends if requested?<li> {props.occasionalWeekends} </li>
                    Would you be prepared to travel with the family?<li> {props.travelWithTheFamily} </li>
                    Do you hold a full driving licence<li> {props.drivingLicence} </li>
                    Can you swim?<li> {props.swim} </li>
                    Can you work with pets in the home?<li> {props.workWithPets} </li>
                    Please state if you have any allergies:<li> {props.allergies} </li>
                    Please tell us about any other requirements or relevant information<li> {props.relevantInformation} </li>
                </div>}


                {/* <div>
                Did Pay  <input type="checkbox" defaultChecked={props.didPay}
                    onClick={(e) => {
                        props.paraentUpdateFunction(props.id, (e.target as HTMLInputElement).checked ? true : false)

                    }} />
            </div> */}

                <li>
                    <button className="BookingNow" type='button' onClick={() => { setchat(!ischat) }}>
                        Booking Now
                    </button>
                </li>

                {ischat === false ? null : <div>
                    <div className="card-popup">
                        <h3>{props.firstName} {props.lastName}</h3>
                        <div id="chat-container" >
                            {/* <div className="container">

                            <p>Hello. How are you</p>
                            <span className="time-right">11:00</span>
                        </div>

                        <div className="container darker">

                            <p>Hi I am fine. Thanks</p>
                            <span className="time-left">13:01</span>
                        </div>

                        <div className="container">

                            <p>Welcome</p>
                            <span className="time-right">13:02</span>
                        </div>

                        <div className="container darker">

                            <p>How I Can Help You</p>
                            <span className="time-left">15:05</span>
                        </div> */}
                            {
                                props.messages.map((message) => {
                                    if (props.id === message.id && props.socketId !== message.socketId) {
                                        return <div className={(message.isReceived) ? 'container darker' : 'container'}>

                                            <p>{message.text}</p>
                                            <span className="time-right">{message.time}</span>
                                        </div>
                                    }
                                })
                            }



                        </div>



                        <form action="" className="">



                            <textarea id={`message-text-${props.id}`} style={{ width: "95%", marginLeft: "-10px" }} className="textbox" placeholder="Type message.." name="msg" required></textarea>
                            <div>
                                <button type="button" className="btn" onClick={() => {

                                    let message = (document.getElementById(`message-text-${props.id}`) as HTMLInputElement).value
                                    console.log(message);
                                    props.sendMessage(message, props.id);
                                    //     let customElement = document.createElement("div");

                                    //     customElement.innerHTML = ` <div class="container">

                                    //     <p>${message}</p>
                                    //     <span class="time-right">13:02</span>
                                    // </div>`;

                                    //     (document.getElementById("chat-container") as HTMLElement).appendChild(customElement)

                                }} >Send</button>
                                <button type="button" className="btn-danger" onClick={() => { setchat(!ischat) }}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>}
                {/* <div>
                <button className='deletebtn' type='submit' onClick={() => { props.paraentDeleteFunction(props.id) }} >Delete </button></div> */}
            </ul>


        </div>
    )
}

const CommentCard = (props: {

    userName: string,
    comment: string
}) => {
    return (
        <ul>
            <li className="usernamecomment">{props.userName}</li>
            <li className="commentcontent">{props.comment}</li>

        </ul>
    )
}





