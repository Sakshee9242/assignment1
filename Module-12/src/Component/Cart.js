import React from 'react'
import { useAddCart } from '../Context/addContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const {cart , clearcart, total_price, shipping_fee} = useAddCart()


  //  yrh rha 
  const Subtotal = Number(total_price).toFixed(2)
  const ordertoal = Number(shipping_fee + +Subtotal)
  
  if(cart.length===0){
    return <h3 className='text-center mt-5'>No Cart In Items</h3>
  }
  return (
    <div className='container mt-5'>
     <div class="row shadow justify-content-center align-items-center pb-2 pt-2">
      <div class="col col-lg-4">
        <p>Item</p>
      </div>
      <div class="col col-lg-2">
        <p>Price</p>
      </div>
      <div class="col col-lg-2">
        <p>Quntity</p>
      </div>
      <div class="col col-lg-2">
        <p>Subtotal</p>
      </div>
      <div class="col col-lg-2">
        <p>Remove</p>
      </div>
      <hr/>
      <div className='cart-item'>
        {cart && cart.map((curEle)=>{
          return <CartItem key={curEle.id} {...curEle}/>
        })}
      </div>
      <hr/>
      <div class="row">
      <div className='col-lg-6 text-start'>
        <Link to="/products">
           <button className='btn btn-dark text-light'>Continue Shopping</button>
        </Link>
      </div>
      <div className='col-lg-6 text-end'>
           <button className='btn btn-danger' onClick={clearcart}>Clear Cart</button>
      </div>
      </div>
         </div>
       <div className="container text-end mt-3">
         <div class="row justify-content-end">
            <div class="col col-lg-3 text-start light shadow-lg rounded-2 pt-2">
                <p>Subtotal :  <span>{Subtotal}</span> </p>
                <p>Shipping Fee : <span>{shipping_fee} </span> </p> 
                <hr/>
                <p>Order Total :  <span>{ordertoal.toFixed(2)}</span></p> 
            </div>
       </div>
       
     </div>
     
    </div>
  )
}

export default Cart
{/* <div>
<h2>Cart Items</h2>
<ul>
  {cart && cart.map(item => (
    <li key={item.id}>
      <img src={item.img} alt={item.overline} />
      <div>{item.overline}</div>
      <div>Price: {item.price}</div>
      <div>Quantity: {item.amount}</div>
    </li>
  ))}
</ul>
</div>  */}