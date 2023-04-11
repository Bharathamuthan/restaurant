import './men.css';
import veg from './veg.jpg';
import non from './non.jpg';
import jui from './jui.jpg';
import { useNavigate } from 'react-router-dom';

function Men() {

    const nv = useNavigate();

    const handleVeg = () => {nv('/veg')}
    const handleNon = () => {nv('/non')}
    const handleJui = () => {nv('/jui')}

return(
<div className='men'>
<ol>
<li><img src={veg} className='veg' alt='veg' onClick={(e)=>handleVeg()}/><br/><br/>
<h3 style={{marginLeft:'120px'}}>Vegetarian Dishes</h3></li>
<li><img src={non} className='non' alt='non' onClick={(e)=>handleNon()}/><br/><br/>
<h3 style={{marginLeft:'150px'}}>Non-Vegetarian Dishes</h3></li>
<li><img src={jui} className='jui' alt='jui' onClick={(e)=>handleJui()}/><br/><br/>
<h3 style={{marginLeft:'200px'}}>Beverages</h3></li>
</ol>
</div>
)
}
export default Men;