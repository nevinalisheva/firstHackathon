import { useEffect, useState } from "react";
import "./App.css";
import Calander from "./components/Calander";
import Landing from "./components/Landing";
import { getPosts } from "./api";
import ListPage from "./components/Listpage";
import sound from "react";
import song from "./song.mp3";
import ScrollButton from "./components/ScrollButton";
import Snowfall from "react-snowfall";
import "./components/Landing.css";

function App() {
  const [posts, setPosts] = useState([]);

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
      <Snowfall />
      <Landing  />
      <ListPage posts={posts} />
      <Calander>{/* <Nav /> */}</Calander>
      <ScrollButton />
    </div>
  );
}

export default App;
