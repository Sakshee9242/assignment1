import React from 'react'

function CartAmount({amount,increment,decrement}) {
  return (
    <span className=' p-2'>
       <button onClick={()=>{increment()}}  className='border-0 bg-light  mx-1 fs-5 fw-medium'>+</button>
       <span className='px-3 py-2 rounded-2'>{amount}</span>
       <button onClick={()=>{decrement()}} className=' border-0 bg-light mx-1 fs-5 fw-medium'>-</button>
       </span>
  )
}

export default CartAmount
