import { useEffect } from "react"
import { getPosts } from "../../features/post/PostSlice"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from "../../app/store";

const Posts = () => {
     
    const dispatch=useDispatch<AppDispatch>();
    const posts=useSelector((state:any)=>state.post.posts)
    useEffect(()=>{ 
      dispatch(getPosts())
    },[])
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p:any) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Posts