import React, {useContext} from 'react'
import './Employee.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Employee =({id,name,price,description,image}) => {

    
     const{cartEmployee, addToCart, removeFromCart} = useContext(StoreContext);

    return(
        <div className='employee'>
            <div className='employee-img-container'>
                <img className='employee-image' src={image} alt=''/>
                {
                    !cartEmployee[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                    :<div className='employee-counter'>
                    <img onClick={()=> removeFromCart(id)} src ={assets.remove_icon_red} alt=''/>
                    <p>{cartEmployee[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt=''/>
                    </div>
                }
            </div>
            <div className='employee-info'>
                <div className='employee-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt=''/>
                </div>
                <p className='employee-disc'>{description}</p>
                <p className='employee-price'>₹{price}</p>
            </div>
        </div>
    )
}
export default Employee;
