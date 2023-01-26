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
        
        <section className='hero1'>
            <section className="category_section p-3">
                <h6>Menu Category</h6>
                <div className="row p-1 " style={{
                    gap: "10px", alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box"
                }}>
                {
                    categories.map((category, index) => {
                        return (
                            <div className="col-1 card"
                                key={index} onClick={() => handleClick(category.strCategory)}>
                                    <img src={category.strCategoryThumb} alt=""
                                        style={{  width: "100%", height: "100%", padding:"0" }}
                                        value={category.strCategory} />                              
                                <div className="cat-category p-0"><p>{category.strCategory}</p>
                                </div>
                            </div>
                              
                        )
                    })
                }    </div> 
            </section>
            <section className="recipes">
                <h1>Recipes</h1>
                <div className="row" style={{marginLeft:"40px", alignSelf:"center"}}>
                {
                    foods.map((food, index) => {
                        return (
                            
                <div class="card  p-0" key={index}>
            <img src= {food.strMealThumb} className="card-img-top" alt={food.strMeal}></img> 
            <div className="card-body">
              <h5 className="card-title">{food.strMeal}</h5>
                            </div>
                            <Link to={`/recipe/${food.idMeal}`} className="link">View More<br/> &#8594;</Link>
                                </div>
                          
                        )
                    })}
                            </div>
                            
            
             
                    
               
  
            </section>
        </section>
         
    )
}
export default Recipe;

