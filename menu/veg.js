import './veg.css'
import Header from '../home/header';
import Footer from '../home/footer';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Veg() {

    const vk = useNavigate();

    const[selectedItem,setSelectedItem]=useState([]);
    const items=[
    {
        name:'Idly',
        image:'veg-idly.jpg',
        price:'40'
    },
    {
        name:'Dosa',
        image:'veg-dosa.jpg',
        price:'80'
    },
    {
        name:'Full Meals',
        image:'veg-meals.jpg',
        price:'150'
    },
    {
        name:'Fried-rice(veg)',
        image:'veg-fried.jpg',
        price:'120'
    },
    {
        name:'Sambar rice',
        image:'veg-sambar.jpg',
        price:'80'
    },
    {
        name:'Curd rice',
        image:'veg-curd.jpg',
        price:'60'
    }];
    const handleOrder = () => {
        vk('/order');
    }
    const handleChange=(item)=>
    {
       setSelectedItem(Item=>[...Item,item])
       
    }
    
    useEffect(()=> {sessionStorage.setItem('selectedItem',JSON.stringify(selectedItem))},[selectedItem]);

return(
    <div>
    <Header/>
    <div className='v'>
    <ol>
    {items.map((item)=>(
    <li>
    <img src={require(`./${item.image}`)} className='veg-menu' alt='veg-menu'/><input type={'checkbox'} name={'veg-menu'} onChange={(e)=>handleChange(item)}/>
    <h5 style={{marginLeft:'42px'}}>{item.name}&emsp;&emsp;-&emsp;&emsp;Rs.{item.price}</h5>
    </li>
    ))}
    </ol>
    </div>
    <button className='order' onClick={(e)=>handleOrder()}>Order Now</button><br/><br/>
    <Footer/>
    </div>
)}
export default Veg;