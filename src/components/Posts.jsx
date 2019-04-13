import React, { useContext, useEffect } from 'react'
import Context from '../stores'
import PostCapsule from './PostCapsule'

const Posts = () => {
  let { state, dispatch } = useContext(Context)

  let fetchPosts = e => {
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(posts => {
        let limitPost = 10
        let payload = posts.splice(
          Math.floor(Math.random() * (posts.length - limitPost)),
          limitPost - 1
        )
        dispatch({
          type: 'FETCH_POSTS',
          payload
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (!state.posts)
    return (
      <div>
        <h3>No posts available at the moment.</h3>
        <a onClick={fetchPosts}>Fetch new Posts!</a>
        <style jsx>{`
          div {
            text-align: center;
          }
          a {
            display: inline-block;
            padding: 8px 16px;
            margin: 8px 0;
            color: white;
            background: teal;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  return (
    <div>
      {state.posts.map(p => (
        <PostCapsule post={p} key={p.id} />
      ))}
      <style jsx>{`
        div {
          overflow-y: auto;
          height: 75%;
        }
      `}</style>
    </div>
  )
}

export default Posts
