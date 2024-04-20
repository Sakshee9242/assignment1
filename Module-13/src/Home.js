import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const dd = useSelector(state=>state.count.num)
  return (
    <div>
      Home {dd}
    </div>
  )
}

export default Home

