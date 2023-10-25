import { useState } from "react"
export default function state() {
    const [posts, setPosts] = useState([])
    const [postid, setPostid] = useState(1)
    const updateup = () => setPostid(prev => prev + 1)
    const updateDown = () => setPostid(prev => prev - 1)

     fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

    return (
        <div> 
          <button onClick={updateup}>+</button> 
          <button onClick={updateDown}>-</button>  
            
            
            {posts?.map((post)=> (
        <>
        {post.id == postid
             ?(<>
            <h2>{post.id} :{post.title}</h2>
             <p>{post.body}</p>
             </> )
             :("")
             }
             <br/>
              </>
             ))}
        </div>
    )
}



// import { useState } from "react"
// export default function State() {
   // const [value, setValue] = useState(0)

    // function update() 
  // setValue(value + 1)*/
 // setValue(prev => prev + 1)

 //const updateup = () => setValue(prev => prev + 1)
  // const updateDown = () => setValue(prev => prev - 1)



//return (
      // <>
         //  <h1>{value}</h1>
         //  <button onClick={updateup}>+</button> <br /> <br />
        //   <button onClick={updateDown}>-</button>
      // </>
  // )

// }
