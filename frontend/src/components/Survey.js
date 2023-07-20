import { React, useState } from 'react';
import "./style.css";
import Button from "react-bootstrap/Button";

export default function Survey() {
  const [clientStatus, setClientStatus] = useState(false);
  function getStatusDiv() {
    if (clientStatus === "false") {
      return (
        <div className="new_client">
          <h6>Client Name</h6>
          <input type="text" placeholder="Bob Jones"></input>
          <div className='mini-spacing'></div>

          <h6>Point of Contact Email</h6>
          <input type="email" placeholder="bob@example.com"></input>
          <div className='mini-spacing'></div>

          <h6>Point of Contact Phone Number</h6>
          <input type="tel" placeholder="123-456-7890"></input>
          <div className='mini-spacing'></div>
        </div>
      );
    } else if (clientStatus === "true") {
      return (
        <>
          <h6>Select Client</h6>
          <select className="selection">
          <option id = "why" value="" disabled selected hidden></option>
            <option value="Client A">Client A</option>
            <option value="Client B">Client B</option>
            <option value="Client C">Client C</option>
          </select>
          <div className='mini-spacing'></div>
        </>
      )
    }
  }

  return (
    <>
      <div className='spacing'>
        <div className='header'>
          <h2>Post-Call Survey</h2>
          <p>Survey to record call information from Zoom for HubSpot integration.</p>
        </div>
        
        <form>
          <h4>Company Name</h4>
          <select className="selection" required>
          <option value="" disabled selected hidden></option>
            <option value="Company A">Company A</option>
            <option value="Company B">Company B</option>
            <option value="Company C">Company C</option>
          </select>
          <div className='mini-spacing'></div>

          <h4>Partner/Client Details</h4>
            <h6>Existing Client/Partner?</h6>
            <select className="selection" onClick={(event) => {
              // here set target value to state
              setClientStatus(event.target.value);}}
              id="client_status" required>
               <option value="" disabled selected hidden></option>
               <option value="true">Yes</option>
               <option value="false">No</option>
            </select>
          <div className='mini-spacing'></div>
          {getStatusDiv()}

          <h4>Call Details</h4>
            <h6>Date: </h6>
            <h6>Time: </h6>
            <h6>Duration (in minutes): </h6>
          <div className='mini-spacing'></div>

          <h4>Manual Notes/Details</h4>
          <input type="text" className='notes' required/>
          <div className='mini-spacing'></div>

          <h4>Resolved or Transferred?</h4>
          <select className="selection" required>
          <option value="" disabled selected hidden></option>
            <option value="resolved">Resolved</option>
            <option value="transferred">Transferred</option>
          </select>
          <div className='mini-spacing'></div>

          <Button type="submit" value="Submit">Submit</Button>
        </form>
        <div></div>
      </div>
      
    </>
  )
}
