import React, {useContext} from 'react'
import './Cart.css'
import { CommContext } from '../CommContext';
import { AiFillDelete } from 'react-icons/ai';



function Cart() {
  const { count,setCount,setCart, cart} = useContext(CommContext)
  

  const handleDel =(id) => {
    const newList = cart.filter((cart) => cart.id !== id);
    setCart(newList);
    { count > 0 && setCount(count - 1)}
  }

  return (
    <div className='cartPage'>
      {
        cart.map((cartItem) => {
          return(
            <div className="cart-page"  key={cartItem.id}>
              <img src={cartItem.img} alt="" />
              <div className="cartname">
                <h1>{cartItem.title}</h1>
                {/*<button >-</button>
                <h3> {quantity}</h3>
                <button >+</button>*/}
              </div>
              <div className="cart-qty">
                <h3> ${cartItem.Price}</h3>
              </div>
              <AiFillDelete className='cartdel' onClick={() => handleDel(cartItem.id)}/>
            </div> 
          )
        })
      }
    </div>
  )
}

export default Cart