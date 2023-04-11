import Header from "../home/header";
import Footer from '../home/footer';
import './contact.css';
import pho from '../contact/underline.png';
import video from '../contact/food video.mp4';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {

    const navi=useNavigate();
        const[namma,setName]=useState('');
        const[phone,setPhone]=useState('');
        const[mail,setMail]=useState('');
        const[msg,setMsg]=useState('');
        const [errors,setErrors]=useState({});
    const handleClick = () => {
        let errors={}
        const check =/@/;
  if(namma===''){
        errors.namma='Username is Required';
  }
  if (mail==='') {
    errors.mail='Mail is Required';
  }
  else if(check.test(mail)===false){
        errors.mail='@ char missing'
  }
  if (phone===''){
    errors.phone='Phone Number is Required';
  }
  if (msg===''){
    errors.msg='Message is Required';
  }
  else {
    navi('/register')
  }
  setErrors(errors);
  console.log(namma,mail,phone,msg)
    }

    return(
    <>
    <Header/>
    <div className='f1'>
            <div>
            <h1 style={{fontSize:'40px',fontStyle:'inherit',marginLeft:'590px',color:'white'}}>Contact Us</h1>
            <img src={pho} className='f2' alt='underline'/>
        <div className='f4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.368511812552!2d76.59607881906105!3d8.871015449206405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc9027528b27%3A0x736056bbe8a41182!2sMundakkal%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1676889992127!5m2!1sen!2sin" title='Your Map'/>
            <fieldset className='f3'>
               <br/><h2>Contact Info</h2>React Restaurants<br/>Surya street, Bharath road,<br/>Near Ajay beer parlour,<br/><br/>Mundakkal, Kollam,<br/> Kerala - 691010, India.<br/><br/>Email : reactrest259@gmail.in<br/><br/>Booking : +91-9876543210
            </fieldset>
        </div>
        <div className="f6">
        <fieldset className='f5'><br/>
        <h1>Message Us</h1><br/>
        <h3>Have a Question about the our Service?</h3><br/><br/>
        <input type="text" name='namma' placeholder={"Name"} onChange={(e)=>setName(e.target.value)}/><br/>
        <span style={{color:'red'}}>{errors.namma}</span><br/>
        <input type="number" name='phone' placeholder={"phone number"} onChange={(e)=>setPhone(e.target.value)}/><br></br>
        <span style={{color:'red'}}>{errors.phone}</span><br/>
        <input type="email" name='mail' placeholder={"E-mail"} onChange={(e)=>setMail(e.target.value)}/><br/>
        <span style={{color:'red'}}>{errors.mail}</span><br/>
        <textarea name="msg" placeholder={"Message"} onChange={(e)=>setMsg(e.target.value)}></textarea><br></br> 
        <span style={{color:'red'}}>{errors.msg}</span><br/>   
        <button type='button' onClick={(e)=>handleClick(e)}>Send</button>
        </fieldset>
        <div><video src={video} alt="food-video.mp4" controls/></div>
        </div>
        </div>
        </div>
    <Footer/>
    </>
    )
}
export default Contact;