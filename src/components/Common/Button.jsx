import React from 'react'

const Button = ({btntext, className}) => {
  return (
  <button className={`px-7 py-3.5 bg-main text-white cursor-pointer ${className}`}>{btntext}</button>
  )
}

export default Button