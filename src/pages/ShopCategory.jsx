import React from 'react'
import './css/ShopCategory.css'
import {ShopContext} from "../context/ShopContext"; 
import { useContext } from 'react';
import drop_down_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/item/Item'
const ShopCategory = (props) => {

  const {All_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-short">
          Sort by <img src={drop_down_icon} alt="" /> 
        </div>
      </div>
      <div className="shopcategory-products">
        {All_products.map((item,i)=>{
          if(props.category===item.category){

            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price } old_price={item.old_price}/>

          }
        })}
        </div>  
        <div className="shopcategory-loadmore">
          EXPLORE MORE
        </div>
    </div>
  )
}
export default ShopCategory;