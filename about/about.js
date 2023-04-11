import './about.css';
import Header from "../home/header";
import Footer from '../home/footer';
import picc from './underline.png';

function BC () {
    return (
        <>
        <Header/>
     <div className='five'>
     <div>
        <h1 className='six'>About Us</h1>
        <img src={picc} className='seven' alt='underline'></img>
         <p  className='eight'><ul>who we are</ul></p>
         <p className='nine'>Our Restaurant offers from traditional and<br/><br/>&emsp;&emsp;as foreign quality.Food is cooked by highly <br/><br/>&emsp;&emsp;Qualified chefs.;We provide delicious lunch<br/><br/>&emsp;&emsp; and dinner.We have Door Delivery facility too..</p>
            <fieldset className='ten'>
                <p style={{color:'darkgray',marginLeft:'5px'}}>Lunch Time<br/><br/>Monday to Sunday<br/>&nbsp;12.00 am-3.00pm<br/><br/>&emsp;&nbsp;Dinner Time<br/><br/>Monday to Sunday<br/>&nbsp;6.00 pm-10.00 pm</p>
            </fieldset>            
     </div>
     </div>
     <Footer/>
     </>
    );
}
export default BC;