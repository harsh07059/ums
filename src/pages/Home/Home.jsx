import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import EmployeeDisplay from '../../components/EmployeeDisplay/EmployeeDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home =() => {
        
        const[type,setType] = useState("All");

    return(
        <div>
          <Header/>
            <ExploreCategory type={type} setType={setType}/>
            <EmployeeDisplay category={type}/>
            <AppDownload/>
          
        </div>
    )
}

export default Home