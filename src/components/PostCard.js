//Bakery ProductItem Component is to represent the Bakery Items
import React from "react";
import posts from "../assets/data";

const PostCard = ({ image, title, description, likes }) => {
  return (
    <div className="post-container">
      <img className="post-image" src={image} alt="post1"></img>
      <h2>Title: {title}</h2>
      <h3>Descriptione: {description}</h3>
      <p>Likes: {likes}</p>
      <button> Like </button>
    </div>
  );
};

export default PostCard;
