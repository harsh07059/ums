import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className='navbar'>
            <a href='/'><img src={assets.logo} alt="" className="logo"/></a>

            <ul className='navbar-menu'>
                <a href='#' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</a>
                <a href='#explore-category' onClick={()=>setMenu("category")} className={menu==="category"?"active":""}>CATEGORY</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>MOBILE APP</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT US</a>  
            </ul> 

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                   <a href='cart'><img src={assets.basket_icon} alt="" /></a>
                <div className={getTotalCartAmount()===0 ? '':'dot'}></div>
                </div> 
            <button onClick={() => setShowLogin(true)}>SIGN IN</button>
            </div>
        </div>
    )
}
export default Navbar