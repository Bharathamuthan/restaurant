import './footer.css';
import picture from'./foot.png';

function Footer() {
    return (
        <div className='one'>
        <div>
        <img src={picture} className='sr' alt='bbq'></img>
        </div>
        <div>
        <p><i class="fa fa-copyright"></i> 2023 Restaurant. All Rights Reserved | Crafted by AB</p>
        </div>
        <div className='two'>
        <i class="fa fa-facebook">&nbsp;&nbsp;&nbsp;Facebook</i><br></br>
        <i class="fa fa-instagram" style={{paddingTop:'15px',paddingBottom:'15px'}}>&nbsp;&nbsp;&nbsp;Instagram</i><br></br>
        <i class="fa fa-twitter">&nbsp;&nbsp;&nbsp;Twitter</i><br></br>
        </div>
        </div>
    );
}
export default Footer;