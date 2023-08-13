import React, { useState,useContext } from 'react'
import data from '../db/data'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CommContext } from './CommContext';

function Products() {
  const [searchItem, setSearchItem] = useState([])
  const {addCart} = useContext(CommContext)

  return (
    <div className='products' data-aos= 'fade-up' data-aos-duration ='1000'>
      <div className="productimg" data-aos= 'fade-in' data-aos-duration ='3000'>
        <h1>Dress T-Shirts</h1>
      </div>
      <h1>Featured Products</h1>
      <h4>Summer Collection New Designs</h4>
      <div className="search-input">
        <input 
         placeholder='Search...' 
         onChange={(e) => {setSearchItem(e.target.value)}}
        />
      </div>
    
      <div className="products-container" data-aos= 'fade-up' data-aos-duration ='1000'>
        {
          data.filter((products) => {
            if (searchItem == "") {
              return products
            }
            else if (products.category.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
              return products
            }
           
          }).map((products) => {
            return(
              <div className="products-box" key={products.Id}>
                <img src={products.img} alt="" />
                <h3>{products.title}</h3>
                <div className="products-star">
                  {products.star} 
                  {products.star} 
                  {products.star} 
                  {products.star} 
                  {products.star} 
                </div>
                <h3>{products.category}</h3>
                <p> ${products.Price}</p>
                <AiOutlineShoppingCart className='products-cart' onClick={() => addCart(products)}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products