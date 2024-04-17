import React, { useState } from 'react'
import CartAmount from './CartAmount';
import { Link } from 'react-router-dom';
import { useAddCart } from '../Context/addContext';

function CartToggle({product}) {
  const [{id}] = product
  const {addCart} = useAddCart()
  const [amount, setAmount] = useState(1);

  const increment = () => {
    amount < 5 ? setAmount(amount + 1) : setAmount(5);
  };
  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  return (
    <div>
      <div className="row">
        <div className="col col-lg-7">
        <CartAmount 
        amount={amount}
        increment={increment}
        decrement={decrement}/> 
        </div>
        <div className="col col-lg-5 text-end">
          <Link to="/cart" onClick={()=>addCart(id,amount,product)}>
            <button className='btn btn-danger'>Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
       
  )
}

export default CartToggle
