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
            <section className="category_section p-3" style={{ marginBottom:"20px" ,height:"200px" }}>
                <h6>Menu Category</h6>
                <div className="row p-1 " style={{
                    boxSizing: "border-box",width:"900px",overflowX:"auto",marginLeft:"12%",height:"100%"
                }}>
                    <ul className="flex flex-row  d-flex mx-w-sm " style={{}}>
                {
                    categories.map((category, index) => {
                        return (
                            <li className=" bg-gray-800 gap-2 rounded-full text-white"
                                key={index} onClick={() => handleClick(category.strCategory)}>
                                    <img src={category.strCategoryThumb} alt=""
                                        style={{  padding:"2" }}
                                        value={category.strCategory} />                              
                                <div className="cat-category p-0"><p>{category.strCategory}</p>
                                </div>
                            </li>
                              
                        )
                    })
                            
                        }
                </ul></div> 
                
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

