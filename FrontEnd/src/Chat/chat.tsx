export function chat(){

  

   
    return (
        <div className="chat-popup" id="myForm">
  <form action="/action_page.php" className="form-container">
    <h1>Chat</h1>

    <label ><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" className="btn">Send</button>
   
  </form>
</div>
    )
}