import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Menu from './menu';
import Contact from './contact/contact';
import Book from './book';
import Veg from './menu/veg';
import Non from './menu/non';
import Jui from './menu/jui';
import Login from './login';
import Register from './register';
import Order from './order';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/veg' element={<Veg/>}/>
    <Route path='/non' element={<Non/>}/>
    <Route path='/jui' element={<Jui/>}/>
    <Route path='/order' element={<Order/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
