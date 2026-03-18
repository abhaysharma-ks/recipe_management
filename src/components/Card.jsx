import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.name} style={styles.image} />

      <div style={styles.content}>
        <h3>{recipe.name}</h3>

        {/* ⭐ Rating (dummy for now) */}
        <p>⭐ {recipe.rating || "4.5"}</p>
        <Link to={`/recipe/${recipe.id}`}>
        <button style={styles.button}>
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

const styles = {
  card: {
    width: "280px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    background: "#fff"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  },
  content: {
    padding: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    background: "#ff6b6b",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer"
  }
};