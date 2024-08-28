//Bakery ProductList Component is to represent the List of Bakery Items.
import React from "react";
import posts from "../assets/data";
import PostCard from "./PostCard";

const PostList = () => {
  const displayPost = posts.map((post) => {
    return (
      <div className="post-section">
        <PostCard
          image={post.image}
          title={post.title}
          description={post.description}
          likes={post.likes}
        />
      </div>
    );
  });
  return <div>{displayPost}</div>;
};

export default PostList;

// <div className="bakerystore-container">
//   <h2>{products.name}</h2>
//   <img className="bakery-items" src={products.image} alt="Bread"></img>
//   <p>{products.price}</p>
// </div>
