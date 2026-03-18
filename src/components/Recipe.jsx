import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const { id } = useParams();

  const recipe = recipes.find((rec) => rec.id === Number(id));

  if (!recipe) {
    return <h2 style={styles.loading}>Recipe not found...</h2>;
  }

  return (
    <div style={styles.container}>
      
      {/* 🔥 Image */}
      <img src={recipe.image} alt={recipe.name} style={styles.image} />

      {/* 🔥 Title + Rating */}
      <div style={styles.header}>
        <h1 style={styles.title}>{recipe.name}</h1>
        <p style={styles.rating}>⭐ {recipe.rating} ({recipe.reviewCount} reviews)</p>
      </div>

      {/* 🔥 Meta Info */}
      <div style={styles.meta}>
        <span>⏱ Prep: {recipe.prepTimeMinutes} min</span>
        <span>🔥 Cook: {recipe.cookTimeMinutes} min</span>
        <span>🍽 Servings: {recipe.servings}</span>
        <span>📊 {recipe.difficulty}</span>
      </div>

      {/* 🔥 Ingredients */}
      <h2 style={styles.heading}>🧂 Ingredients</h2>
      <ul style={styles.list}>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* 🔥 Steps */}
      <h2 style={styles.heading}>👨‍🍳 Instructions</h2>
      <ol style={styles.steps}>
        {recipe.instructions.map((step, index) => (
          <li key={index} style={styles.step}>
            {step}
          </li>
        ))}
      </ol>

    </div>
  );
};

export default Recipe;

const styles = {
  container: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "sans-serif",
    background: "#fff"
  },

  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },

  title: {
    fontSize: "28px",
    fontWeight: "700"
  },

  rating: {
    color: "#f59e0b",
    fontWeight: "500"
  },

  meta: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "20px",
    color: "#555"
  },

  heading: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "20px"
  },

  list: {
    paddingLeft: "20px",
    marginBottom: "20px"
  },

  steps: {
    paddingLeft: "20px"
  },

  step: {
    marginBottom: "10px",
    lineHeight: "1.6"
  },

  loading: {
    textAlign: "center",
    marginTop: "50px"
  }
};