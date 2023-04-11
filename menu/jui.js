import './jui.css'
import Header from '../home/header';
import Footer from '../home/footer';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Jui() {

    const jk = useNavigate();

    const[selectedItem,setSelectedItem]=useState([]);
    const items=[
    {
        name:'Mojito',
        image:'jui-mojito.jpg',
        price:'80'
    },
    {
        name:'Goli soda',
        image:'jui-goli.jpg',
        price:'40'
    },
    {
        name:'Orange juice',
        image:'jui-orange.jpg',
        price:'120'
    },
    {
        name:'Pomogranete juice',
        image:'jui-pomo.jpg',
        price:'130'
    },
    {
        name:'Watermelon juice',
        image:'jui-water.jpg',
        price:'60'
    },
    {
        name:'Badam milk',
        image:'jui-badam.jpg',
        price:'50'
    }];
    const handleOrder = () => {
        jk('/order'); 
    }
    const handleChange=(item)=>
    {
       setSelectedItem(Item=>[...Item,item])
       
    }
    
    useEffect(()=> {sessionStorage.setItem('selectedItem',JSON.stringify(selectedItem))},[selectedItem]);

return(
    <div>
    <Header/>
    <div className='j'>
    <ol>
    {items.map((item)=>(
    <li>
    <img src={require(`./${item.image}`)} className='jui-menu' alt='jui-menu'/><input type={'checkbox'} name={'jui-menu'} onChange={(e)=>handleChange(item)}/>
    <h5 style={{marginLeft:'42px'}}>{item.name}&emsp;&emsp;-&emsp;&emsp;Rs.{item.price}</h5>
    </li>
    ))}
    </ol>
    </div>
    <button className='order' onClick={(e)=>handleOrder()}>Order Now</button><br/><br/>
    <Footer/>
    </div>
)}
export default Jui;