import React, { useState, useEffect } from "react";
import Card from "../components/card"
const Creation = () => {
  const [fetchData, setCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/recipes")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  //console.log(fetchData)

  const [formData, setFormData] = useState({
    image: "",
    category: "",
    ingredients: "",
    directions: "",
  });

  const handleOnChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    //console.log(formData)
  };

  function handleSubmit(e) {
    e.preventDefault();

    setCard([...fetchData, formData]);

    fetch("http://localhost:8001/recipes", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => document.location.reload())
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log(fetchData)
  return (
    <section className="hero">
      <h1>My Creation</h1>
      <div
        className="container-fluid"
        style={{ marginTop: "20px", paddingLeft: "25px" }}
      >
        <form
          onSubmit={handleSubmit}
          className="row p-3 container-fluid"
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            outlineColor: "whitesmoke",
          }}
        >
          <div className="col-3">
            <input
              onChange={handleOnChange}
              name="image"
              value={formData.image}
              className="form-control form-control-sm"
              type="text"
              placeholder="Image"
              aria-label=".form-control-sm example"
            />
          </div>
          <div className="col-3">
            <textarea   onChange={handleOnChange}
              name="ingredients"
              value={formData.ingredients}
              className="form-control form-control-sm"
              type="text"
              placeholder="ingredients"
              aria-label=".form-control-sm example"
              rows="3">
                
              </textarea>
          </div>
          <div className="col-3">
            <select onChange={handleOnChange} name="category">
              <option>beef</option>
              <option>chicken</option>
              <option>dessert</option>
              <option>lamb</option>
              <option>pasta</option>
              <option>pork</option>
              <option>seaFood</option>
              <option>side</option>
              <option>starter</option>
              <option>vegan</option>
              <option>vegeterian</option>
              <option>breakfast</option>
              <option>goat</option>
              <option>miscellaneous</option>
            </select>
          </div>
          <div className="col-3">
            <textarea
              onChange={handleOnChange}
              value={formData.directions}
              aria-label=".form-control-sm example"
              placeholder="preparations"
              name="directions"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3">
                 {/* {formData.directions} */}
            </textarea>
          </div>
            
          <div className="col-3 mx-auto p-3">
            <button className="btn btn-sm btn-success mx-auto" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
<div className="container-fluid" style={{ border: "2px solid white",borderRadius:"10px",margin:"10px", display:"flex", gap:"20px", flexWrap:"wrap", padding:"100px"}}>
          <Card fetchData={fetchData}/>
      </div>
    </section>
  );
};
export default Creation;
