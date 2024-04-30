import useCount from "./hooks/useCount"

// import { useState } from 'react'
function Task1() {
  const[count,inc,dec]=useCount()
  return (

    <div>
       <h1>count:{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>_</button>
    </div>

  )
}
export default Task1