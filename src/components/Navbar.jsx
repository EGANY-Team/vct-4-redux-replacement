import React from 'react'
import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <nav>
      <h3>VCT#4 - Redux replacement</h3>
      <UserProfile />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-bottom: 32px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </nav>
  )
}

export default Navbar
