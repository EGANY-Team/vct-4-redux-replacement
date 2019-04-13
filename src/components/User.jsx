import React, { useState, useContext } from 'react'
import AvatarCapsule from './AvatarCapsule'
import Context from '../stores'

const User = () => {
  let { state, dispatch } = useContext(Context)
  let [name, setName] = useState(state.user.name)
  let [avatar, setAvatar] = useState(state.user.avatar)
  let [valid, setValid] = useState({})

  let login = e => {
    e.preventDefault()
    if (isValid()) {
      dispatch({ type: 'CHANGE_USER_PROFILE', payload: { name, avatar } })
    }
  }

  let isValid = () => {
    let valid = {}

    if (!name) {
      valid.name = 'Please enter your name'
    }

    if (!avatar) {
      valid.avatar = 'Please choose an avatar'
    }

    setValid(valid)
    return Object.keys(valid).length === 0
  }

  return (
    <form onSubmit={login}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name here"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {valid.name && <p>{valid.name}</p>}
      <label>Avatar</label>
      <div className="avatar-grid">
        {state.avatars.map((url, index) => (
          <AvatarCapsule
            id={index}
            key={index}
            url={url}
            checked={url === avatar}            
            changeAvatar={setAvatar}
          />
        ))}
      </div>
      {valid.avatar && <p>{valid.avatar}</p>}
      <button type="submit">Change</button>
      <style jsx>{`
        form {
          padding: 16px;
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
        }
        form label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
        }
        form input {
          margin-bottom: 8px;
          width: 100%;
          padding: 8px;
        }
        .avatar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-bottom: 16px;
        }
        form button {
          color: white;
          border: none;
          background: teal;
          padding: 8px 16px;
          width: 100%;
          display: block;
        }
        form button:hover {
          cursor: pointer;
        }
        p {
          color: red;
        }
      `}</style>
    </form>
  )
}

export default User
