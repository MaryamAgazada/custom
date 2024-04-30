import React from 'react'
import UseCounter from './hooks/UseCounter'
// import { useState } from 'react'
export default function Task1() {
  const[count,inc,dec]=UseCounter()
  return (

   [count,inc,dec]

  )
}
