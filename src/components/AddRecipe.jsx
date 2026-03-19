import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addRecipe } from "../features/recipeSlice"; // adjust path if needed
import { addRecipe } from "../features/recipes/recipeSlice";

const AddRecipe = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    image: "",
    reviewCount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...formData,
      rating: Number(formData.rating),
      prepTimeMinutes: Number(formData.prepTimeMinutes),
      cookTimeMinutes: Number(formData.cookTimeMinutes),
      servings: Number(formData.servings),
      reviewCount: Number(formData.reviewCount),

      // convert comma-separated string → array
      ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      instructions: formData.instructions.split(",").map((item) => item.trim()),
    };

    dispatch(addRecipe(newRecipe));

    // reset form
    setFormData({
      name: "",
      rating: "",
      ingredients: "",
      instructions: "",
      prepTimeMinutes: "",
      cookTimeMinutes: "",
      servings: "",
      difficulty: "",
      image: "",
      reviewCount: "",
    });

    alert("Recipe Added ✅");
  };

  return (
    <div style={styles.container}>
      <h2>Add New Recipe</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input name="name" placeholder="Recipe Name" value={formData.name} onChange={handleChange} required />

        <input name="rating" placeholder="Rating (e.g. 4.5)" value={formData.rating} onChange={handleChange} />

        <input name="ingredients" placeholder="Ingredients (comma separated)" value={formData.ingredients} onChange={handleChange} />

        <input name="instructions" placeholder="Instructions (comma separated)" value={formData.instructions} onChange={handleChange} />

        <input name="prepTimeMinutes" placeholder="Prep Time (minutes)" value={formData.prepTimeMinutes} onChange={handleChange} />

        <input name="cookTimeMinutes" placeholder="Cook Time (minutes)" value={formData.cookTimeMinutes} onChange={handleChange} />

        <input name="servings" placeholder="Servings" value={formData.servings} onChange={handleChange} />

        <input name="difficulty" placeholder="Difficulty (Easy/Medium/Hard)" value={formData.difficulty} onChange={handleChange} />

        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />

        <input name="reviewCount" placeholder="Review Count" value={formData.reviewCount} onChange={handleChange} />

        <button type="submit">Add Recipe</button>

      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
  },
};

export default AddRecipe;