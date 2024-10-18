import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
      const json = await response.json()
      setPosts(json)
    } catch(e) {
      
    }
    
  }

  useEffect(()=> {
    getPosts()
  },[])

  return (
    <>
      {/* {JSON.stringify(posts)} */}
      {posts.map(post=><div>{post.title}</div>)}
    </>
  )
}

export default App
