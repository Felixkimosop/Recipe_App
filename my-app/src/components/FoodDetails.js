import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  console.log(id);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, [id]);
  console.log(food);
  return (
    <section
      style={{
        background: "#E4BCFE",
      }}
    >
      <div>FoodDetails{id}</div>
      <>
        {food.map((item, index) => {
          return (
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
              key={index}
            >
              <h3>Meal:{item.strMeal}</h3>
              <h2>Area:{item.strArea}</h2>
              <div
              // style={{
              //   width: "100%",
              //   height: "50%",
              //   marginLeft: "40px",
              //   paddingLeft: "60px",
              //   alignContent: "center",
              // }}
              >
                <img
                  src={item.strMealThumb}
                  className="card img"
                  alt={item.strMeal}
                  style={{
                    width: "20%",
                    height: "10%",
                    // marginLeft: "40px",
                  }}
                />
                {/* <video>
                  <source src={item.strSource} type="video/mp4" />
                </video> */}
              </div>
              <div className="row">
                <div className="col-4">
                  <h3 className="card title">Ingredients</h3>
                  <ul className="card body">
                    <li className="card-text-sm">{item.strIngredient1}</li>
                    <li className="card-text-sm">{item.strIngredient2}</li>
                    <li className="card-text-sm">{item.strIngredient3}</li>
                    <li className="card-text-sm">{item.strIngredient4}</li>
                    <li className="card-text-sm">{item.strIngredient5}</li>
                    <li className="card-text-sm">{item.strIngredient6}</li>
                    <li className="card-text-sm">{item.strIngredient7}</li>
                    <li className="card-text-sm">{item.strIngredient8}</li>
                    <li className="card-text-sm">{item.strIngredient9}</li>
                    <li className="card-text-sm">{item.strIngredient10}</li>
                    <li className="card-text-sm">{item.strIngredient11}</li>
                    <li className="card-text-sm">{item.strIngredient12}</li>
                    <li className="card-text-sm">{item.strIngredient13}</li>
                    <li className="card-text-sm">{item.strIngredient13}</li>
                    <li className="card-text-sm">{item.strIngredient14}</li>
                    <li className="card-text-sm">{item.strIngredient15}</li>
                    <li className="card-text-sm">{item.strIngredient16}</li>
                    <li className="card-text-sm">{item.strIngredient17}</li>
                    <li className="card-text-sm">{item.strIngredient18}</li>
                    <li className="card-text-sm">{item.strIngredient19}</li>
                    <li className="card-text-sm">{item.strIngredient20}</li>
                  </ul>
                </div>
                <div className="col-4" id="measures">
                  <h2 className="card title">Measures</h2>
                  <ol className="card body">
                    <li className="card-text-sm">{item.strMeasure1}</li>
                    <li className="card-text-sm">{item.strMeasure2}</li>
                    <li className="card-text-sm">{item.strMeasure3}</li>
                    <li className="card-text-sm">{item.strMeasure4}</li>
                    <li className="card-text-sm">{item.strMeasure5}</li>
                    <li className="card-text-sm">{item.strMeasure6}</li>
                    <li className="card-text-sm">{item.strMeasure7}</li>
                    <li className="card-text-sm">{item.strMeasure8}</li>
                    <li className="card-text-sm">{item.strMeasure9}</li>
                    <li className="card-text-sm">{item.strMeasure10}</li>
                    <li className="card-text-sm">{item.strMeasure11}</li>
                    <li className="card-text-sm">{item.strMeasure11}</li>
                    <li className="card-text-sm">{item.strMeasure12}</li>
                    <li className="card-text-sm">{item.strMeasure11}</li>
                    <li className="card-text-sm">{item.strMeasure13}</li>
                    <li className="card-text-sm">{item.strMeasure11}</li>
                    <li className="card-text-sm">{item.strMeasure14}</li>
                    <li className="card-text-sm">{item.strMeasure15}</li>
                    <li className="card-text-sm">{item.strMeasure16}</li>
                    <li className="card-text-sm">{item.strMeasure17}</li>
                    <li className="card-text-sm">{item.strMeasure18}</li>
                    <li className="card-text-sm">{item.strMeasure19}</li>
                    <li className="card-text-sm">{item.strMeasure20}</li>
                  </ol>
                </div>
                <div className="col-4">
                  <h2 className="card title">Instructions</h2>
                  <p className="card-text-sm">{item.strInstructions}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </section>
  );
}

export default FoodDetails;
