import React, { useState, useEffect } from "react"
import List from "./components/List";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/").then(response => response.json()).then(data => {
      setPosts(data);
    });
  }, []);
  return (
    <List posts={posts} />
  );
}

export default App;