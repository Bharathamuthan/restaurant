import './booking.css'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Booking() {

    const[namee1,setNamee1]=useState();
    const[phone1,setPhone1]=useState();
    const[person1,setPerson1]=useState();
    const[day1,setDay1]=useState();
    const[time1,setTime1]=useState();
    const[msg1,setMsg1]=useState();

    const navi = useNavigate();

    useEffect(()=> {
        const ronnie = [{namee1,phone1,person1,day1,time1,msg1}]
        sessionStorage.setItem('ronnie',JSON.stringify(ronnie));
    });
    
    const handleBook = () => {
        console.log(namee1,phone1,person1,day1,time1,msg1);
        navi('/menu')
    }

    return(
    <div style={{backgroundColor:'black', padding:'50px'}}>
    <form className='neymar'>
    <br/><br/><br/>
    <h2>Online Booking</h2>
    <h5>or call +91-9876543210</h5>
    <br/>
    <input type={'text'} placeholder={'Your Name'} style={{height:'30px', width:'180px'}} name={'namee1'} value={namee1} onChange={(e)=>setNamee1(e.target.value)}/>&nbsp;&nbsp;&nbsp;
    <input type={'text'} placeholder={'Phone Number'} style={{height:'30px', width:'180px'}} name={'phone1'} value={phone1} onChange={(e)=>setPhone1(e.target.value)}/><br/><br/>
    <input type={'text'} placeholder={'No.of persons'} style={{height:'30px', width:'120px'}} name={'person1'} value={person1} onChange={(e)=>setPerson1(e.target.value)}/>&nbsp;&nbsp;
    <input type={'date'} style={{height:'31px', width:'120px'}} name={'day1'} value={day1} onChange={(e)=>setDay1(e.target.value)}/>&nbsp;&nbsp;
    <select style={{height:'35px', width:'120px'}} name={'time1'} value={time1} onChange={(e)=>setTime1(e.target.value)}>
    <option>12:00pm</option>
    <option>01:00pm</option>
    <option>02:00pm</option>
    <option>03:00pm</option>
    <option>04:00pm</option>
    <option>05:00pm</option>
    <option>06:00pm</option>
    <option>07:00pm</option>
    <option>08:00pm</option>
    <option>09:00pm</option>
    <option>10:00pm</option>
    </select><br/><br/>
    <textarea placeholder={'Message'} style={{height:'80px', width:'382px'}} name={'msg1'} value={msg1} onChange={(e)=>setMsg1(e.target.value)}/><br/><br/><br/>
    <button className='ak' onClick={(e)=>handleBook()}>Book</button>
    </form>    
    </div>
);
}
export default Booking;