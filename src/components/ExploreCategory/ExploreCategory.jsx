import React from 'react'
import './ExploreCategory.css'
import { category_list } from '../../assets/assets'

const ExploreCategory =({type,setType}) => {

    return(
        <div className='explore-category' id='explore-category'>
        <h1>Explore our categories</h1>
        <p className='explore-category-text'></p>
        <div className='explore-category-list'>
            {category_list.map((item,index)=>{
                return(
                    <div onClick={()=>setType(prev=>prev===item.category_name?"All":item.category_name)} key={index} className='explore-category-list-item'>
                    <img className={type===item.category_name?"active":""} src={item.category_image} alt='' />
                    <p>{item.category_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
        </div>
    )
}
export default ExploreCategory