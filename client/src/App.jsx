import { useEffect, useState } from 'react'
import './App.css'
import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:3000')
      const data = await res.json()
      setPosts(data.posts)
      // console.log(data.posts)
    }

    getPosts()
  }, [])

  return (
    <>
      <h2>I will display a list of posts</h2>
      <hr />
      <Posts posts={posts} />
      <p>
        <a href='#'>learn react</a>
      </p>
      <hr />
    </>
  )
}

export default App
