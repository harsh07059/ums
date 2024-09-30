import React, {useContext} from 'react'
import './EmployeeDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Employee from'../Employee/Employee'

const EmployeeDisplay =({category}) => {

    const {employee_list} = useContext(StoreContext)
    return(
        <div className='employee-display' id='employee-display'>
            <h2>Top services near you</h2>
            

            <div className='employee-display-list'>
                {employee_list.map((employee,index)=>{
                    if(category==='All' || category===employee.category){
                    return <Employee key={index} id={employee.id} name={employee.name} description={employee.description} price={employee.price} image={employee.image}/>
                    }
                })}
            </div>

        </div>
    )
}
export default EmployeeDisplay
