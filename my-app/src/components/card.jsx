import React from 'react';
function Card({fetchData}){
    console.log(fetchData)
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
                  <button className="btn btn-outline-secondary btn-sm">Delete</button>
                </div>
              
            );
          })}
          </div>
    )
}export default Card