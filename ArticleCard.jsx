import React from "react";

function ArticleCard({ img, title, description, rating, author }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="author">{rating} — {author}</p>
    </div>
  );
}

export default ArticleCard;
