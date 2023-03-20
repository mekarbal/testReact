import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL= 'https://jsonplaceholder.typicode.com/posts'
function App() {

  const [posts,setPosts]=useState([])
  const [error, setError] = useState(false)
const [post,setPost] = useState({})
  
  const fetchData = () => {
    axios.get(URL).then((response) => {
      setError(false)
      setPosts(response.data);
    }).catch((err) => {
      console.log(err);
      setError(true)
  })
  }

  const insertPostHandler = () => {
  setPosts([post,...posts])
}

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <input value={post?.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <button onClick={()=>insertPostHandler()}>Add</button>
      <div>
        
</div>

      {posts?.map((post,index) => (
        <div key={index}>
          <h3>{post.title}</h3>
       </div>
     ))}
    </div>
  );
}

export default App;
