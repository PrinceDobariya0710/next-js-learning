import React from 'react'

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    return res.json()
}
const LearnDataFetching = async () => {
    const data = await getData()
  return (
    <div>
        <h1>Learn Data Fetchings</h1>
        {
            data.map((post,i)=>(
                <div key={i}>
                    <h1 >Title :{post.title}</h1>
                    <p>Body :{post.body}</p>
                    <hr />
                </div>

            ))
        }
    </div>
  )
}

export default LearnDataFetching