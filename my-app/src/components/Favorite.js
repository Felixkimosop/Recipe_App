    import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";  
import { MdAutoDelete } from "react-icons/md";    

    const Recipe = () => {

        const [favorites, setFavorites] = useState([])
       
        
        useEffect(() => {
            fetch("http://localhost:3700/favorite")
                .then((res) => res.json())
                .then((data) => setFavorites(data));
        }, []);

        function handleDelete(id) {
            fetch(`http://localhost:3700/favorite/${id}`, {
                method: 'DELETE',
                
            })
            document.location.reload();
            
        }

        return (
					<section className='hero'>
						<section className='recipes'>
							<h1>Favorites</h1>
							<div
								className='row'
								style={{ marginLeft: "40px", alignSelf: "center" }}
							></div>

							<div
								className='row'
								style={{ marginLeft: "40px", alignSelf: "center" }}
							>
								{favorites.map((favorite, index) => {
									return (
										<div key={index} class='card  p-0'>
											<img
												src={favorite.strMealThumb}
												alt={favorite.strMeal}
												className='card-img-top'
											/>
											<h2>{favorite.strMeal}</h2>
											{/* <p>{favorite.idMeal}</p> */}
											<div className='row' style={{ marginTop: "auto" }}>
												<div className='col-7'>
													<Link to={`/recipe/${favorite.idMeal}`}>
														{" "}
														view more
													</Link>
												</div>
												<div className='col-4'>
													<button onClick={() => handleDelete(favorite.id)}>
														<MdAutoDelete
															style={{
																width: "30px",
																height: "30px",
																marginBottom: "5px",
																cursor: "pointer",
															}}
														/>
													</button>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</section>
					</section>
				);
    }
    export default Recipe;