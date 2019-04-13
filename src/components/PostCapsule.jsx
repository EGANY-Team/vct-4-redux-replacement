import React from 'react'

const PostCapsule = ({ post }) => {
  let { title, body } = post

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <style jsx>{`
        h3 {
          text-transform: capitalize;                    
        }
        p {
          margin: 8px 0;
        }
      `}</style>
    </div>
  )
}

export default PostCapsule
