import { useEffect, useState } from "react";
import "./App.css";
import Calander from "./components/Calander";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import { getPosts } from "./api";
import ListPage from "./components/Listpage";
import { useRef } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const List = useRef(null);


  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
    });
  }, []);
  //console.log(posts);
  if (!posts.length) {
    return "loading";
  }
  return (
    <div className="App">
      
      <Landing List={List}/>
      <ListPage posts={posts} ref={List}/>
      <Calander>{/* <Nav /> */}</Calander>
    </div>

  );
}

export default App;
