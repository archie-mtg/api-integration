import { React } from 'react';
import "./style.css";
import Select from 'react-select';

const clients_partners = [
  { value: 'Company A', label: 'Company A' },
  { value: 'Company B', label: 'Company B' },
  { value: 'Company C', label: 'Company C' }
]

const post_call_status = [
  { value: 'Resolved', label: 'Resolved' },
  { value: 'Transferred', label: 'Transferred' }
]

const client_recorded = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' }
]

function Survey() {
  return (
    <>
      <script>
        
      </script>
      <div className='spacing'>
        <div className='header'>
          <h2>Post-Call Survey</h2>
          <p>Survey to record call information from Zoom for HubSpot integration.</p>
        </div>
        
        <form>
          <h4>Company Name</h4>
          <Select options={clients_partners} />
          <div className='mini-spacing'></div>

          <h4>Partner/Client Details</h4>
            <h6>Existing Client/Partner?</h6>
            <Select id="client_status" options={client_recorded} />
            <div className="optional">
              <h6>Client Name</h6>
              <input type="text"></input>

              <h6>Point of Contact Email</h6>
              <input type="email"></input>

              <h6>Point of Contact Phone Number</h6>
              <input type="tel"></input>
            </div>
          <div className='mini-spacing'></div>

          <h4>Call Details</h4>
            <h6>Date: </h6>
            <h6>Time: </h6>
            <h6>Duration (in minutes): </h6>
          <div className='mini-spacing'></div>

          <h4>Manual Notes/Details</h4>
          <input type="text" className='notes'/>
          <div className='mini-spacing'></div>

          <h4>Resolved or Transferred?</h4>
          <Select options={post_call_status} />
          <div className='mini-spacing'></div>

          <h4>AI-Generated Summary</h4>
          <p>(Coming Soon)</p>
          <input type="submit" value="Submit" />
        </form>

        <div></div>
      </div>
    </>
  )
}

export default Survey;
