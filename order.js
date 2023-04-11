import Footer from "./home/footer";
import Header from "./home/header";
import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { confirm } from "react-confirm-box";

function Order() {

    const sullan = useNavigate();

    const handleConfirm = () => {
        alert('Yup.. Your Order will be Delivered Soon !')
        sullan('/');

    }

    const handleCancel = async() => {
        await confirm('Are you sure ?');
        sullan('/');
    }

    const[food,setFood] = useState([]);
    useEffect(() => {
    setFood(JSON.parse(sessionStorage.getItem('selectedItem')))
    },[]);

    const odd = {
        columns: [
        {label: 'Dish / Beverage', field: 'dish'},
        {label: 'Price', field: 'price'}
        ],
        rows: food?.map((item) => {
        return {
        dish: item.name,
        price: item.price
        }
})}

return(
    <div>
    <Header/>
    <MDBDataTable bordered striped data={odd}></MDBDataTable>
    <div style={{display:'flex'}}>
    <button style={{backgroundColor: 'green', marginLeft: '595px', marginBottom: '20px'}} onClick={(e)=>handleConfirm()}>Confirm</button>
    <button style={{backgroundColor: 'red', marginLeft: '20px', marginBottom: '20px'}} onClick={(e)=>handleCancel()}>Cancel</button>
    </div>
    <Footer/>
    </div>
)}
export default Order;