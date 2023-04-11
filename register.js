import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./home/footer";
import Header from "./home/header";
import './register.css';

function Register() {
    const navig=useNavigate();
    const[name,setName]=useState('');
    const[dateofbirth,setDateofbirth]=useState('');
    const[userid,setUserid]=useState('');
    const[passw,setPassw]=useState('');
    const[confirmpassw,setConfirmpassw]=useState('');
    const [errors,setErrors]=useState({});
    const Create =() => {
        let errors={}
        const check =/@/;
        const output=(passw.length>=6);
  if(name===''){
   errors.name='Name is Required';
  }
  if (userid===''){
    errors.userid='User Id is Required';
  }
  else if(check.test(userid)===false){
    errors.userid='@ char missing'
  }
  if (dateofbirth===''){
    errors.dateofbirth='date of birth is Required';
  }
  if (passw==='') {
    errors.passw='Password is Missing';
}
else if (output===false){
    errors.passw='Password should have 6 Characters'
}
  if (confirmpassw===''){
    errors.confirmpassw='Confirmpassword is Missing';
  }
  else if (check.test(confirmpassw)===true){
    errors.confirmpassw='password correct'
  }
  else {
        navig('/menu')
  }
  setErrors(errors);
    }

    return(
        <>
        <Header/>
        <div className="cll">
        <div>
           <fieldset className="fi"><br/>
           <h1 style={{color:'white'}}>Sign In</h1><br/>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <span style={{color:'red'}}>{errors.name}</span><br/>
            <input type="email" placeholder="EmailID" value={userid} onChange={(e)=>setUserid(e.target.value)}/><br></br>
            <span style={{color:'red'}}>{errors.userid}</span><br/>
            <input style={{width:'250px'}} type="date" placeholder="Date of Birth" value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}/><br></br>
            <span style={{color:'red'}}>{errors.dateofbirth}</span><br/>
            <input type="password" placeholder="Password" value={passw} onChange={(e)=>setPassw(e.target.value)}/><br></br>
            <span style={{color:'red'}}>{errors.passw}</span><br/>
            <input type="password" placeholder="ConfirmPassword" value={confirmpassw} onChange={(e)=>setConfirmpassw(e.target.value)}/><br></br>
            <span style={{color:'red'}}>{errors.confirmpassw}</span><br/><br/>
            <button type="button" onClick={(e)=>Create()}>Create</button>
           </fieldset>
        </div>
        </div>
        <Footer/>
        </>
    );
    }
    export default Register;