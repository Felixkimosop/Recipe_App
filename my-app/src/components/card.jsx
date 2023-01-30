import React, { useState, useEffect } from 'react';
// import Recipe from './Recipe'; 
function Card({fetchData}){
    console.log(fetchData)

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(data => setData(data))
  },[]);


  const handleDelete = (id) => {
    fetch(`https://versel-json-file.vercel.app/recipes/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
    .then(data =>document.location.reload())
  };

  
  



    return(
        <div className="container-fluid" style={{ border: "2px solid white",borderRadius:"10px",margin:"10px", display:"flex", gap:"20px", flexWrap:"wrap", padding:"100px"}}>
        {fetchData.map((data, index) => {
            return (
              
                <div key={index} className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={data.image} alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "white" }}>
                     <b> {data.category} </b>
                    </h5>
                    <h5
                      className="card-title"
                      style={{ color: "Black", textAlign: "center" }}
                    >
                      <b>Ingredients</b>
                    </h5>
                    <p className="card-text">{data.ingredients}</p>
                  </div>
    
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "Black", textAlign: "center" }}
                    >
                      <b>Directions</b>
                    </h5>
                    <p className="card-text">{data.directions}</p>
                  </div>
                  <div className="container-fluid" style={{display:"flex", justifyContent:"center", gap:"10px"}}>

                  
          
                  <button className="btn btn-outline-secondary btn-sm"
                   onClick={() => handleDelete(data.id)}
                  >Delete</button>
                  <button className="btn btn-outline-secondary btn-sm"
                  // onClick={() => handleUpdate(data.id)}
                  >Update</button>
                  </div>
                </div>
              
            );
          })}
          </div>
    )
}export default Card