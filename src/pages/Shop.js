import React, { useContext } from 'react'
import shopdata from '../db/shopdata'
import { AiOutlineShoppingCart } from "react-icons/ai"
import './pages.css'
import { Link } from 'react-router-dom'
import { CommContext } from './CommContext'
import { Carousel } from '@trendyol-js/react-carousel';


function Shop() {


  const {addCart} = useContext(CommContext)

  return (
    <div className='Shop'>
      <div className="shoptext"  data-aos= 'fade-up' data-aos-duration ='1000'>
        <h1 >Dress T-Shirts</h1>
        <Link to="/shop" ><h2>View All</h2></Link>
      </div>
     
      <div className="products-container" data-aos= 'fade-up' data-aos-duration ='1000'>
      <Carousel show={3.5} slide={3} swiping={true}>
        {
          shopdata.map((products) => { 
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
      </Carousel>
      </div>
    </div>
  )
}

export default Shop