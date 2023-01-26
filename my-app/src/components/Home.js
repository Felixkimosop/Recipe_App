import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";



import Logo1 from "./img/r5.png";
import Logo2 from "./img/fi4.png";
import Logo3 from "./img/cu2.png";
import Logo4 from "./img/c3.png";
import Logo5 from "./img/plate.jpeg";
import Logo6 from "./img/chef.png";

import "./Navbar.css";

const Home = () => {
  return (
    <>
       <section id="hero" class="container px-4 ">
        <div class="px-5 py-3 row flex-md-row-reverse align-items-center g-5">
          <div class="image col-10 col-sm-8 col-md-7">
            <img src={Logo5} class="d-block mx-md-auto img-fluid" alt="Recipe" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-md-5 text-hero-section">
            <div class="pt-5 pb-4"><span class="badge-hero text-white px-4 py-1">Delicious Food</span></div>
            <h1 class="display-1 fw-bold lh-sm mb-3">
      <TypeAnimation
      sequence={[
        "Easy Recipes",
                  "Delicious Food",
         "Tasty Treat"
        
      ]}
      wrapper="h1"
      cursor={true}
      repeat={Infinity}
        speed={3}
        deletionSpeed={5}
      style={{ fontSize: '40px',color:"#ff4500" }}
    />
             </h1>
            <p class="lead mb-5">Sometimes you just need a go-to easy dinner recipe — one that's perfect for busy nights where you don't want to spend hours in the kitchen, but still want something more substantial than, say, a PB&J.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary orange-bg border-0 btn-lg px-5 me-md-2 rounded-pill">View Recipe <span class="hidden_span"></span> &#8594;</button>
            </div>
          
          </div>
        </div>
    </section>

    <section className="hero">
      <div className="container">
      <div className="row">
          <div className="col">
            <img src={Logo1} alt="" />
            <div className="foods">
              <div className="details">
                <h2>Veggie fried rice</h2>
                <p>Dinner &#8594;</p>
                  <div><BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                  </div>
                 
              </div>

            </div>
          </div>
          <div className="col">
             <img src={Logo3} alt="" />
            <div className="foods">
              <div className="details">
                <h2>Sweet & sour chicken</h2>
                <p>Dessert &#8594;</p>
                  <div>
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                </div>
              </div>

            </div>
          </div>
          <div className="col">
             <img src={Logo4} alt="" />
            <div className="foods">
              <div className="details">
                <h2>Chicken breast</h2>
                <p>Lunch &#8594;</p>
               <div>
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                </div>
                
              </div>

            </div>
          </div>
          <div className="col">
             <img src={Logo2} alt="" />
            <div className="foods">
              <div className="details">
                <h2>Salmon dinner</h2>
                <p>Dinner &#8594;</p>
              
                <div>
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                    <BsFillStarFill className='icons' />
                  <BsFillStarFill className='icons' />
                  <AiOutlineStar className='icons'/>
                  </div>
                  </div>
            </div>
        </div>
      </div>
      </div>
      </section>
      <section className="extra-info">
        <div className="container">
          <h2>Chef Advice</h2>
           <div className="carousel--container">
            <div className="carousel--content">
              <div className="row">
                  <div className="col">
              <img src={Logo6} alt=""/>
                </div>
                <div className="col">
                  <div className="content">
                    <p>HELLO</p>
              </div>
              </div>
              </div>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}
export default Home;