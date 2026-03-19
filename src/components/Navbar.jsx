import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateList } from "../features/recipes/recipeSlice";

const Navbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const list = JSON.parse(localStorage.getItem("recipes"));

  useEffect(() => {
    const timmer = setTimeout(() => {
      if (input.trim() === "") {
        dispatch(updateList(list));
        return;
      }
      const filteredList = list.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      });
      console.log(filteredList);
      dispatch(updateList(filteredList));
    }, 500);
    return ()=>clearTimeout(timmer);
  }, [input, list, dispatch]);

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>🍳 RecipeApp</div>

      <div>
        <input
          type="text"
          placeholder="enter a name to search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.navItem}>
          Home
        </Link>
        <Link to="/add" style={styles.navItem}>
          Add New Recipe
        </Link>
        <Link to="/favourite" style={styles.navItem}>
          Favourite Recipe
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f2937",
    color: "white",
    padding: "15px 30px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  navItem: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  },
};

export default Navbar;
