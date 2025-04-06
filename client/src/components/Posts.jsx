import React from 'react'

const Posts = ({ posts }) => {
  const renderedPosts = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))

  return <div>{renderedPosts}</div>
}

export default Posts
