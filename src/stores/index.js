import { createContext } from 'react'

const Context = createContext()
export default Context

const avatars = [
  `https://picsum.photos/64?image=${Math.floor(Math.random() * 100)}`,
  `https://picsum.photos/64?image=${Math.floor(Math.random() * 100)}`,
  `https://picsum.photos/64?image=${Math.floor(Math.random() * 100)}`,
  `https://picsum.photos/64?image=${Math.floor(Math.random() * 100)}`
]

export const initialState = {
  user: {
    name: 'Guest',
    avatar: avatars[0]
  },
  posts: null,
  avatars
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'CHANGE_USER_PROFILE':
      let { name, avatar } = action.payload

      return {
        ...state,
        user: {
          name,
          avatar
        }
      }
    default:
      return state
  }
}
