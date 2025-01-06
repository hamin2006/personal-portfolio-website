import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../css/Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const [submission, setSubmission] = useState({name:"", email:"", message:""});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({publicKey:'Xz_OhX-aqHDPIsx-9', blockHeadless: true});
    emailjs.send('service_tow07qb', 'template_2lncth4', submission)
      .then(
        (response) => {
          alert("Sent " + response.text);
          console.log('SUCCESS! ' + response.text);
          navigate("/contact");
        },
        (error) => {
          alert("Unable to send: " + error.text);
          console.log('FAILED...', error.text);
        },
      );
    
  };

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value});
  };

  return (
    <div className="please">
      <div class="form-container">
        <form class="form" onSubmit = {handleSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name = "name" 
            value = {submission.name} 
            required 
            onChange = {handleChange}>
          </input>
        </div>

        <div class="form-group">
          <label>Email</label>
          <input 
            type="text" 
            name = "email" 
            value = {submission.email} 
            required 
            onChange = {handleChange}>
          </input>
        </div>

        <div class="form-group">
          <label for="textarea">Send me a message!</label>
          <textarea 
            name="message" 
            value = {submission.message} 
            required 
            onChange = {handleChange} 
            rows="10" 
            cols="50" > 
          </textarea>
        </div>

        <button class="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;