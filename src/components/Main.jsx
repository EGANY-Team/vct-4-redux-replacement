import React from 'react'

const Main = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          display: grid;
          grid-gap: 32px;
          grid-template-columns: 1fr 2fr;
          width: 75%;          
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default Main
