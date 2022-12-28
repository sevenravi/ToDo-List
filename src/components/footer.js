import React from 'react'

const Footer = () => {
  let footerstyle ={
    position: "relative",
    top: "100vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light ' style={footerstyle}>
      <p className='text-center my-3' >

      Copyright &copy; Mytodos.com
      </p>
      
    </footer>
  )
}

export default Footer
