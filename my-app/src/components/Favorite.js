    import React, {useEffect, useState} from "react";
    import { Link } from "react-router-dom";    
    const Recipe = () => {

        const[favorites, setFavorites ] = useState([])
        
        
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
                <h1>My Recipes</h1>
                <div className='recipes'>
                    {favorites.map((favorite, index) => {
                        return (
                            <div key={index} className='recipe'> 
                                <img src={favorite.strMealThumb} alt={favorite.strMeal} />
                                <h2>{favorite.strMeal}</h2>
                                <p>{favorite.idMeal}</p>
                                <Link to={`/recipe/${favorite.idMeal}`}> view more</Link>
                                <button onClick={() => handleDelete(favorite.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </section>
            
        
        )
    }
    export default Recipe;