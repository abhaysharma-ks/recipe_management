// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchRecipes } from "../features/recipes/recipeSlice";
// import Card from "./Card";

// const Home = () => {
//   const recipes  = useSelector((state) => state.recipes.recipes);
//   const  status  = useSelector((state) => state.recipes.status);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // 🔥 Fetch only if list is empty
//     if (recipes.length === 0) {
//       dispatch(fetchRecipes());
//     }
//   }, [dispatch, recipes.length]);

//   return (
//     <div>
//       <h1>🍽️ Recipes</h1>

//       {/* Loading State */}
//       {status === "loading" && <p>Loading recipes...</p>}

//       {/* Recipes List */}
//       <div>
//         {recipes.map((recipe) => (
//           <Card recipe={recipe}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../features/recipes/recipeSlice";
import Card from "./Card";

const Home = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, recipes.length]);

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
    fontFamily: "sans-serif"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "600",
    color: "#333"
  },

  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#777"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px"
  },

  cardWrapper: {
    transition: "transform 0.3s ease"
  }
};
