import React from "react";
import PostList from "./components/PostList";
import "./assets/starter.css";

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>My cool Instagram</h1>
      </div>
      <div className="post-section">
        <PostList />
      </div>
    </div>
  );
};

export default App;
