import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  console.log(posts)

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      setPosts(await data.json())
    }
    
    fetchData()

    return () => {
      fetchData()
    }
  }, [])
  

  return (
    <div className="App">
      <h1>
        Posts from API
      </h1>
      <section>
        {
          posts && posts.length!==0 && posts.map(p => (
            <div key={p.id}>
              <h2>
                {p.id}. {p.title}
              </h2>
              <p>
                {p.body}
              </p>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
