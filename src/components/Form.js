import "./FormStyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <h1 className="form-top">Lets have a chat</h1>
        <form>
            <label>Your Name</label>
            <input type="test"></input>
            <label>E-Mail</label>
            <input type="test"></input>
            <label>Subject</label>
            <input type="test"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here"></textarea>
            <button className="btn" >Submit</button>
        </form>
        
    </div>
  )
}

export default Form