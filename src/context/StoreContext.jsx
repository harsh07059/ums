import React, { createContext, useState, useEffect } from "react";
import { employee_list } from '../assets/assets';


export const StoreContext = createContext(null)

const StoreContextProvider =(props) => {

    const[cartEmployee,setCartEmployee] =useState({});

    const addToCart = (employeeId) => {
        
        if(!cartEmployee[employeeId]) {
            setCartEmployee((prev)=>({...prev,[employeeId]:1}))
        }
        else{
            setCartEmployee((prev)=>({...prev,[employeeId]:prev[employeeId]+1}))
        }
    }

    const removeFromCart = (employeeId)=> {
        setCartEmployee((prev)=> ({...prev,[employeeId]:prev[employeeId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount=0;
        for (const employee in cartEmployee){
            if(cartEmployee[employee]>0){
                let employeeInfo = employee_list.find((product)=> product._id === employee);
                totalAmount += employeeInfo.price* cartEmployee[employee];
            }
        }
        return totalAmount;
    }


    const contextValue = {
        employee_list,
        cartEmployee,
        setCartEmployee,
        addToCart,
        removeFromCart,
        getTotalCartAmount


        
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
