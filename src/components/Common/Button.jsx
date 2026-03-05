import React from 'react'

const Button = ({btntext, className}) => {
  return (
  <button className={`px-7 border-white border outline-0 text-white cursor-pointer ${className}`}>{btntext}</button>
  )
}

export default Button