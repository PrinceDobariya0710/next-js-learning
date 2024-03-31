import React from 'react'

const Posts = ({params}) => {
  console.log(params)
  return (
    <div>Posts {params.posts}</div>
  )
}

export default Posts