import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-330 mx-auto h-screen ${className}`}>{children}</div>
  )
}

export default Container