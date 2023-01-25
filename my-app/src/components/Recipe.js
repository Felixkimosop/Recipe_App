import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Recipe = () => {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.categories);
      });
  }, []);

  function handleClick(strCategory) {
    setQuery(strCategory);
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        // console.log(data.meals);
      });
  }, [query]);

  return (
    <section className="hero1">
      <section className="category_section">
        <div className="row">
          {categories.map((category, index) => {
            return (
              <div
                className="col-1"
                key={index}
                onClick={() => handleClick(category.strCategory)}
              >
                <img
                  src={category.strCategoryThumb}
                  alt=""
                  value={category.strCategory}
                />{" "}
                <p>{category.strCategory}</p>
              </div>
            );
          })}{" "}
        </div>
      </section>
      <section className="recipes">
        <h1>Recipes</h1>
        <div className="row">
          {foods.map((food, index) => {
            return (
              <div key={index} className="card col-2 p-0 m-3 ">
                <img
                  src={food.strMealThumb}
                  className="card-img-top"
                  alt={food.strMeal}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{food.strMeal}</h5>
                  <p className="card-text">{food.strCategory}</p>
                </div>
                <Link to={`/recipe/${food.idMeal}`}>View More</Link>
              </div>
            );
          })}
        </div>

        {/* {
                        foods.map((food, index) => {
                            return (
                                <div class="card" key={index}>
  <img src={food.strMealThumb} alt="Avatar" style="width:100%"/>
  <div class="container">
    <h4><b>{food.strMeal}</b></h4>
    <p>{food.strCategory}</p>
  </div>
</div>
                            )
                        })
                    } */}
      </section>
    </section>
  );
};
export default Recipe;
