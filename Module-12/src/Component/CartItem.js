import React from 'react'
import CartAmount from './CartAmount';
import { useAddCart } from '../Context/addContext';

function CartItem({id,price,img,amount,discription}) {
    const {deleteItem, increment, decrement} = useAddCart()

    const totalAmount = (Number(price*amount).toFixed(2))

  return (
    <div className='row justify-content-center align-items-center'>
         <div class="col col-lg-4 img-discription">
        <div className='img-section'>
            <img src={img} alt={id} className='img-fluid h-25 w-25 rounded-5'/>            
        </div>
            <span>{discription}</span>
      </div>
      <div class="col col-lg-2">
        <p>${price}</p>
      </div>
      <div class="col col-lg-2">
        <CartAmount 
        amount={amount}
        increment={()=> increment(id)}
        decrement={()=> decrement(id)}/> 
      </div>
      <div class="col col-lg-2">
        <p>${totalAmount}</p>
      </div>
      <div class="col col-lg-2">
        <i className="fa-solid fa-trash text-danger" onClick={()=>deleteItem(id)}></i>
      </div>
      
    </div>
  )
}

export default CartItem
