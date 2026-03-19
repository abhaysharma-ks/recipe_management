import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../features/recipes/recipeSlice";

const Card = ({ recipe }) => {
  const dispatch=useDispatch()

  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.name} style={styles.image} />

      <div style={styles.content}>
        <h3>{recipe.name}</h3>

        <p>⭐ {recipe.rating || "4.5"}</p>

        <Link to={`/recipe/${recipe.id}`}>
          <button style={styles.button}>View Details</button>
        </Link>

        <br />
        <br />

        <button
          style={styles.delbtn}
          onClick={() => dispatch(removeRecipe(recipe.id))}
        >
          Delete recipe
        </button>
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
  },
  delbtn:{
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    background: "red",
    color: "#ffff",
    borderRadius: "6px",
    cursor: "pointer"
  },
  favBtn: {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
},
};