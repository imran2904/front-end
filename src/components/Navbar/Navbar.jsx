import './Navbar.css';
import React, { useRef, useState } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import drop_down_icon from '../Assets/dropdown_icon.png'
const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const menuref=useRef();
  const dropdown_toggle=(e)=>{
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (

    

    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
    </div> 
    <img className="nav-drop" onClick={dropdown_toggle} src={drop_down_icon} alt="" />
    <ul ref={menuref} className="nav-menu">
    
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>WoMen</Link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<> </>}</li>
    </ul>
    <div className="nav-login-cart">

       <Link to='/login'><button>Login</button></Link>  
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-counter">0</div>
      
    
    </div>    
    

    </div>
  )
}

export default Navbar;