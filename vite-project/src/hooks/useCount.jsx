import React, { useState } from 'react'

function useCount() {
    const [count,setCount]=useState(0)
function inc() {
    setCount(count+1)
}
function dec() {
    setCount(count-1)
}
return [count,setCount,inc,dec]
}

export default useCount
