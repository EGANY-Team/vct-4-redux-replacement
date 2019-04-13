import React, { useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Context, { reducer, initialState } from './stores'

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Navbar />
      <Home />
      <style jsx global>{`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          font-family: sans-serif;
        }

        img {
          display: block;
          max-width: 100%;
        }

        a {
          text-decoration: none;
          color: teal;
        }

        a:hover {
          text-decoration: underline;
        }

        li {
          list-style: none;
        }
      `}</style>
    </Context.Provider>
  )
}

export default App
