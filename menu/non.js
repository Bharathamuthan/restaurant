import './non.css'
import Header from '../home/header';
import Footer from '../home/footer';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Non() {

    const nk = useNavigate();

    const[selectedItem,setSelectedItem]=useState([]);
    const items=[
    {
        name:'Chicken briyani',
        image:'non-cb.jpg',
        price:'200'
    },
    {
        name:'Mutton briyani',
        image:'non-mb.jpg',
        price:'250'
    },
    {
        name:'Fish Meals',
        image:'non-fish.jpg',
        price:'180'
    },
    {
        name:'Fried-rice(chicken)',
        image:'non-rice.jpg',
        price:'150'
    },
    {
        name:'Parotta',
        image:'non-parotta.jpg',
        price:'40'
    },
    {
        name:'Chicken 65',
        image:'non-65.jpg',
        price:'70'
    }];
    const handleOrder = () => {
        nk('/order'); 
    }
    const handleChange=(item)=>
    {
       setSelectedItem(Item=>[...Item,item])
       
    }
    
    useEffect(()=> {sessionStorage.setItem('selectedItem',JSON.stringify(selectedItem))},[selectedItem]);

return(
    <div>
    <Header/>
    <div className='n'>
    <ol>
        {items.map((item)=>(
        <li>
        <img src={require(`./${item.image}`)} className='non-veg-menu' alt='non-veg-menu'/><input type={'checkbox'} name={'non-veg-menu'} onChange={(e)=>handleChange(item)}/>
        <h5 style={{marginLeft:'42px'}}>{item.name}&emsp;&emsp;-&emsp;&emsp;Rs.{item.price}</h5>
        </li>
        ))}
    </ol>
    </div>
    <button className='order' onClick={(e)=>handleOrder()}>Order Now</button><br/><br/>
    <Footer/>
    </div>
)}
export default Non;