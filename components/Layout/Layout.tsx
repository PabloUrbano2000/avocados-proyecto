import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <footer className="container">This is the footer</footer>
      
      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
