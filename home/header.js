import pic from './Res.png'
import './header.css'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Header() {

    //login button
    const nav = useNavigate();
    const handleLogin = () => {
    nav('/login')
    }

return(
    <div>
    <header className='header'>
    <div className='navbar'>
    <img src={pic} className='src' alt='pic'/>
    <ol>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><button onClick={(e)=>handleLogin()}>Login</button></li>
    </ol>
    </div>
    </header>
    </div>
);
}
export default Header;