import React, { useEffect, useState } from 'react'
import axios from "axios";
import './BabySitterCard.css';
import socketClient from 'socket.io-client';
export default function Babysitterchat() {
    const url = 'http://localhost:3001/profile';
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
                // didPay: false,
            }]);
    const [selected, setSelected] = useState({
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
        // didPay: false,
    });
    const socket = socketClient('localhost:3001/');
    useEffect(() => {
        axios.get(url)
            .then(person => {
                setBabySitterArr(person.data);
                setSelected(person.data[0]);
            });
        console.clear();
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
        socket.emit('message', { text: message, id: id, time: time, socketId: socketId, isReceived: true });
        setMessages((old) => [...old, { id: id, text: message, time: time, isReceived: false, socketId: '' }]);
    }
    return (
        <div className='container' style={{backgroundColor:'transparent',marginTop:'90px',border:'none'}}>
        <div className="card" style={{ left: "0", marginLeft: "10%",borderRadius:'10px', backgroundColor:'transparent',boxShadow:'3px #da9e9e' }}>
            Select BabySitter Chat
            <select style={{borderRadius:'5px',marginLeft:'10px',marginRight:'10px',outline:'none',border:'none'}} onChange={(e) => setSelected(babySitterArr[parseInt(e.target.value)])}>
                {
                    babySitterArr.map((sitter, index) => <option value={index}>{sitter.firstName} {sitter.lastName}</option>)
                }
            </select>
            <div className="card" style={{ height: "500px",backgroundColor:'transparent',boxShadow:' 1px 10px 2px #da9e9e' }}>
                <h3>{selected.firstName} {selected.lastName}</h3>
                <div id="chat-container" >
                    {
                        messages.map((message: any) => {
                            if (selected.id === message.id && socketId !== message.socketId) {
                                return <div className={(message.isReceived) ? 'container darker' : 'container'}>

                                    <p>{message.text}</p>
                                    <span className="time-right">{message.time}</span>
                                </div>
                            }
                        })
                    }



                </div>



                <form action="" className="">



                    <textarea id={`message-text-${selected.id}`} style={{ width: "95%", marginLeft: "-10px" }} className="textbox" placeholder="Type message.." name="msg" required></textarea>
                    <div>
                        <button type="button" className="btn" onClick={() => {

                            let message = (document.getElementById(`message-text-${selected.id}`) as HTMLInputElement).value
                            console.log(message);
                            sendMessage(message, selected.id);
                            //     let customElement = document.createElement("div");

                            //     customElement.innerHTML = ` <div class="container">

                            //     <p>${message}</p>
                            //     <span class="time-right">13:02</span>
                            // </div>`;

                            //     (document.getElementById("chat-container") as HTMLElement).appendChild(customElement)

                        }} >Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}