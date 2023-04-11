import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import Header from './home/header';
import Footer from './home/footer';

function Login () {
      const navii=useNavigate();
      const [username,setUsername]=useState('');
      const [password,SetPassword]=useState('');
      const [errors,setErrors]=useState({});
      const handleSubmit = () => {
            
            let errors={}
            const check =/@/;
            const output=(password.length>=6);
      if(username===''){
            errors.username='Username is Required';
      }
      else if(check.test(username)===false){
            errors.username='@ char missing'
      }
      if (password==='') {
            errors.password='Password is Missing'
      }
      else if (output===false){
            errors.password='Password should have 6 Characters'
      }
      else {
            navii('/register')
      }
      setErrors(errors);
      }
return(
      <>
      <Header/>
      <div className='twele'>
       <div>
      <fieldset className='field'><br/>
      <h2 style={{color:'white'}}>Login </h2><br/><br/>
      <input type="text"  placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
      <span style={{color:'red'}}>{errors.username}</span><br/>
      <br/><input type='password' placeholder='Password' value={password} onChange={(e)=>SetPassword(e.target.value)}/><br/>
      <span style={{color:'red'}}>{errors.password}</span><br/><br/>
      <button style={{backgroundColor:'teal'}} onClick={(e)=>handleSubmit()}>Submit</button><br/><br/>
      <Link style={{color:'white'}} to='/register'>SignUp</Link>
      </fieldset>
      </div>
      </div>
      <Footer/>
      </>
);
}
export default Login;