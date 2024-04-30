import React from 'react'
import { useState } from 'react'
export default function UseCounter() {
    const [count,setCount]=useState(0)
    function inc() {
        setCount(count+1)
    }
    function dec() {
        setCount(count-1)
    }
  return (
    <div>
       <h1>count:{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>_</button>
    </div>
  )
}
