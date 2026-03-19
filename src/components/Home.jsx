import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../features/recipes/recipeSlice";
import Card from "./Card";

const Home = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);
  const dispatch = useDispatch();
  const localList = JSON.parse(localStorage.getItem("recipes"));

  console.log(recipes)
  useEffect(() => {
    if (recipes.length===0 && localList.length === 0)
      dispatch(fetchRecipes());
  }, [recipes]);

  if (recipes.length === 0 && localList.length !== 0) {
    return <h1>No recipe Found</h1>;
  } else if (status === "loading" && localList.length === 0) {
    return <div> Heating up the oven</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍽️ Explore Recipes</h1>

      {status === "loading" && <p style={styles.loading}>Loading recipes...</p>}

      <div style={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.cardWrapper}>
            <Card recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    padding: "20px",
    background: "#f9fafb",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
  },

  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#777",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  cardWrapper: {
    transition: "transform 0.3s ease",
  },
};
