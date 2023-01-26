import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";
import { GrFavorite } from "react-icons/gr";



function FoodDetails() {
	const { id } = useParams();
	const [food, setFood] = useState([]);
	const [favorite, setFavorite] = useState([])
	

	// console.log(id);


	useEffect(() => {
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		.then((res) => res.json())
		.then((data) => setFood(data.meals));
	}, [id]);
	

	function addToFavorites (items, id){
		let newFavorite = food.filter((data) => data.id === id)
		setFood (newFavorite) 
		setFavorite ([...favorite, items])
	}
	function handleClick (idMeal){
		const items = food.find((item) => item.idMeal === idMeal)
		const favFood = {
			idMeal: items.idMeal,
            strMeal: items.strMeal,
			strMealThumb: items.strMealThumb,
		}
		
		fetch ("http://localhost:3700/favorite", {
			method: "POST",
            headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(favFood),
		})
		.then((res) => res.json())
		.then((data) => {
            console.log (data)})
	}

	
	return (
		<div>
			<section className='method_section'>
				<div className='container'>
				
						{food.map((item, index) => {
							return (
								<>
									<div className='row' style={{ marginBottom: "15px" }}>
										<div className='col-4' key={index}>
											<img
												value={item.strMealThumb}
												src={item.strMealThumb}
												className='card img'
												alt={item.strMeal}
												style={{
													width: "80%",
													height: "80%",
													marginBottom: "1px",
													marginTop: "0",
												}}
											/>

											<label style={{ fontSize: "30px" }}>
												Meal:
												<span
													style={{
														// fontFamily: "clicker script",
														fontWeight: "bold",
														fontSize: "30px",
													}}
													value={item.strMeal}
												>
													{item.strMeal}
												</span>
											</label>
											<br />
											<label style={{ fontSize: "30px" }}>
												Area:
												<span
													style={{
														// fontFamily: "clicker script",
														fontWeight: "bold",
														fontSize: "30px",
													}}
													value={item.idMeal}
												>
													{item.strArea}
												</span>
											</label>
										</div>
										<div className='col-3 ingredients'>
											<h3 className='card title'>Ingredients</h3>
											<ul className='card body d-flex m-0'>
												<li className='card-text-sm'>{item.strIngredient1}</li>
												<li className='card-text-sm'>{item.strIngredient2}</li>
												<li className='card-text-sm'>{item.strIngredient3}</li>
												<li className='card-text-sm'>{item.strIngredient4}</li>
												<li className='card-text-sm'>{item.strIngredient5}</li>
												<li className='card-text-sm'>{item.strIngredient6}</li>
												<li className='card-text-sm'>{item.strIngredient7}</li>
												<li className='card-text-sm'>{item.strIngredient8}</li>
												<li className='card-text-sm'>{item.strIngredient9}</li>
												<li className='card-text-sm'>{item.strIngredient10}</li>
												<li className='card-text-sm'>{item.strIngredient11}</li>
												<li className='card-text-sm'>{item.strIngredient12}</li>
												<li className='card-text-sm'>{item.strIngredient13}</li>
												<li className='card-text-sm'>{item.strIngredient13}</li>
												<li className='card-text-sm'>{item.strIngredient14}</li>
												<li className='card-text-sm'>{item.strIngredient15}</li>
												<li className='card-text-sm'>{item.strIngredient16}</li>
												<li className='card-text-sm'>{item.strIngredient17}</li>
												<li className='card-text-sm'>{item.strIngredient18}</li>
												<li className='card-text-sm'>{item.strIngredient19}</li>
												<li className='card-text-sm'>{item.strIngredient20}</li>
											</ul>
										</div>
										<div className='col-3'>
											<h2 className='card title'>Measures</h2>
											<ol className='card body'>
												<li className='card-text-sm'>{item.strMeasure1}</li>
												<li className='card-text-sm'>{item.strMeasure2}</li>
												<li className='card-text-sm'>{item.strMeasure3}</li>
												<li className='card-text-sm'>{item.strMeasure4}</li>
												<li className='card-text-sm'>{item.strMeasure5}</li>
												<li className='card-text-sm'>{item.strMeasure6}</li>
												<li className='card-text-sm'>{item.strMeasure7}</li>
												<li className='card-text-sm'>{item.strMeasure8}</li>
												<li className='card-text-sm'>{item.strMeasure9}</li>
												<li className='card-text-sm'>{item.strMeasure10}</li>
												<li className='card-text-sm'>{item.strMeasure11}</li>
												<li className='card-text-sm'>{item.strMeasure11}</li>
												<li className='card-text-sm'>{item.strMeasure12}</li>
												<li className='card-text-sm'>{item.strMeasure11}</li>
												<li className='card-text-sm'>{item.strMeasure13}</li>
												<li className='card-text-sm'>{item.strMeasure11}</li>
												<li className='card-text-sm'>{item.strMeasure14}</li>
												<li className='card-text-sm'>{item.strMeasure15}</li>
												<li className='card-text-sm'>{item.strMeasure16}</li>
												<li className='card-text-sm'>{item.strMeasure17}</li>
												<li className='card-text-sm'>{item.strMeasure18}</li>
												<li className='card-text-sm'>{item.strMeasure19}</li>
												<li className='card-text-sm'>{item.strMeasure20}</li>
											</ol>
										</div>
										<div className='col-2'>
											<Link to='/recipe' className='link'>
												<ImArrowLeft />
												<br />
												Back
											</Link>
											<br />
											<button onClick={() => handleClick(item.idMeal)}>
												<GrFavorite className="fav_icon" /><br/>
												+Favorite
											</button>
										</div>
									</div>
									<div
										className='instructions'
										style={{ marginBottom: "10px" }}
									>
										<h2 className='card title'>Instructions</h2>
										<p className='card-text-sm'>{item.strInstructions}</p>
									</div>
								</>
							);
						})}
				
				</div>
			</section>
		</div>
	);
}

export default FoodDetails;
