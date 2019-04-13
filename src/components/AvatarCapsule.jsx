import React from 'react'

const AvatarCapsule = ({ id, checked, url, changeAvatar }) => {
  return (
    <React.Fragment>
      <input
        id={`avatar-${id}`}
        type="radio"
        name="avatar"
        value={url}
        checked={checked}
        onChange={e => changeAvatar(e.target.value)}
      />
      <label htmlFor={`avatar-${id}`}>
        <img src={url} />
      </label>
      <style jsx>{`
        input {
          display: none;
        }
        label {
          display: flex;
          padding: 4px;
          justify-content: center;
        }
        label:hover,
        input:checked + label {
          outline: solid 1px teal;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  )
}

export default AvatarCapsule
