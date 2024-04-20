import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './Action'


function About() {
    const num = useSelector(state=> state.count.num)
    const dispatch = useDispatch()
  return (
    <div>
      About {num}
      <button onClick={()=>{dispatch(inc())}}> + </button>
      <button onClick={()=>{dispatch(dec())}}> - </button>
    </div>
  )
}

export default About
