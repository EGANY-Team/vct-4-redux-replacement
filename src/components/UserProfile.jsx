import React, { useContext } from 'react'
import Context from '../stores'

const UserProfile = () => {
  let { state } = useContext(Context)
  let {
    user: { avatar, name }
  } = state

  return (
    <div>
      <span>{name}</span>
      <img src={avatar} alt="avatar" />
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        div span {
          margin-right: 16px;
        }
        div img {
          max-width: 32px;
        }
      `}</style>
    </div>
  )
}

export default UserProfile
