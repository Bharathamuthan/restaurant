import './home.css';
import Header from "./header";
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

function Home() {

    //Book table button
    const nav = useNavigate();
    const handleOrder = () => {
    nav('/book')
    }

    return(
    <>
    <Header/>
    <div className='four'>
    <div>
    <p className='pc'><br/><br/>Upscale vegetarian and non-vegetarian Restaurant..</p><br/>
    <button className='pk' onClick={(e)=>handleOrder()}>Book Table</button>
    <p className='pp'>Come with your Family & Friends,Feel <br/><br/> the joy of our mouthwatering food !</p>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default Home;