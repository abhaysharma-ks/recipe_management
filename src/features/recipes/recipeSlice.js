import{createSlice,nanoid,createAsyncThunk} from "@reduxjs/toolkit"


const initialState={
    recipes: JSON.parse(localStorage.getItem("recipes")) || [],
    status: "idle",
}

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes;
  },
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      console.log("Added!");
    },
    editRecipe: (state, action) => {
      console.log("Edit!");
    },
    removeRecipe: (state, action) => {
      console.log("remove");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.recipes.length === 0) {
          state.recipes = action.payload;
          localStorage.setItem("recipes", JSON.stringify(action.payload));
        }
      });
  },
});
export const {addRecipe, removeRecipe, editRecipe} = recipeSlice.actions;

export default recipeSlice.reducer;