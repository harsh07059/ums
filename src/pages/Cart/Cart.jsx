import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

    const { cartEmployee, employee_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-employee'>
                <div className='cart-employee-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                < br />
                <hr />
                {employee_list.map((employee, index) => {
                    if (cartEmployee[employee._id] > 0) {
                        return (
                            <div>
                                <div className='cart-employee-title cart-employees-employee'>
                                    <img src={employee.image} alt='' />
                                    <p>{employee.name}</p>
                                    <p>₹{employee.price}</p>
                                    <p>{cartEmployee[employee._id]}</p>
                                    <p>₹{employee.price * cartEmployee[employee._id]}</p>
                                    <p onClick={() => removeFromCart(employee._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Service Charge</p>
                            <p>₹{2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Total</p>
                            <b>₹{getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart