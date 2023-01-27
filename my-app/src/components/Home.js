import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import Logo1 from "./img/r5.png";
import Logo2 from "./img/fi4.png";
import Logo3 from "./img/cu2.png";
import Logo4 from "./img/c3.png";
import Logo5 from "./img/plate.jpeg";
import Logo6 from "./img/chef.png";
import Extra1 from "./img/1.jpeg";
import Extra2 from "./img/2.jpeg";
import Extra3 from "./img/3.jpeg";
import Extra4 from "./img/4.jpeg";
import Extra5 from "./img/5.jpeg";
import Extra6 from "./img/6.jpeg";



const Home = () => {
  return (
		<>
			<section id='hero' class='container px-4 '>
				<div class='px-5 py-3 row flex-md-row-reverse align-items-center g-5'>
					<div class='image col-10 col-sm-8 col-md-7'>
						<img
							src={Logo5}
							class='d-block mx-md-auto img-fluid'
							alt='Recipe'
							width='700'
							height='500'
							loading='lazy'
						/>
					</div>
					<div class='col-md-5 text-hero-section'>
						<div class='pt-5 pb-4'>
							<span class='badge-hero text-white px-4 py-1'>
								Delicious Food
							</span>
						</div>
						<h1 class='display-1 fw-bold lh-sm mb-3'>
							<TypeAnimation
								sequence={["Easy Recipes", "Delicious Food", "Tasty Treat"]}
								wrapper='h1'
								cursor={true}
								repeat={Infinity}
								speed={3}
								deletionSpeed={5}
								style={{ fontSize: "40px", color: "#ff4500" }}
							/>
						</h1>
						<p class='lead mb-5'>
							Sometimes you just need a go-to easy dinner recipe — one that's
							perfect for busy nights where you don't want to spend hours in the
							kitchen, but still want something more substantial than, say, a
							PB&J.
						</p>
						<div class='d-grid gap-2 d-md-flex justify-content-md-start'>
							<button
								type='button'
								class='btn btn-primary orange-bg border-0 btn-lg px-5 me-md-2 rounded-pill'
							>
								<Link to='recipe'>View Recipe</Link> <span class='hidden_span'></span>{" "}
								&#8594;
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className='hero'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<img src={Logo1} alt='' />
							<div className='foods'>
								<div className='details'>
									<h2>Veggie fried rice</h2>
									<p>Dinner &#8594;</p>
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
						<div className='col'>
							<img src={Logo3} alt='' />
							<div className='foods'>
								<div className='details'>
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
						<div className='col'>
							<img src={Logo4} alt='' />
							<div className='foods'>
								<div className='details'>
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
						<div className='col'>
							<img src={Logo2} alt='' />
							<div className='foods'>
								<div className='details'>
									<h2>Salmon dinner</h2>
									<p>Dinner &#8594;</p>

									<div>
										<BsFillStarFill className='icons' />
										<BsFillStarFill className='icons' />
										<BsFillStarFill className='icons' />
										<BsFillStarFill className='icons' />
										<AiOutlineStar className='icons' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='extra-info'>
				<div className='container'>
					<h2>Chef Advice</h2>
					<div className='carousel--container'>
						<div className='carousel--content'>
							<div className='row'>
								<div className='col-6 display'>
									<img src={Logo5} alt='' />
									<img src={Logo4} alt='' />
									<img src={Logo3} alt='' />
									<img src={Logo2} alt='' />
									<div className='col'>
										<img src={Extra1} alt='' />
										<img src={Extra2} alt='' />
										<img src={Extra3} alt='' />
										<img src={Extra4} alt='' />
										<img src={Extra5} alt='' />
										<img src={Extra6} alt='' />
										<img src={Extra1} alt='' />
									</div>
								</div>
								<div className='col-6'>
									<div className='content'>
										<h2>
											Cooking Quotes:{" "}
											<img
												src={Logo6}
												alt=''
												style={{
													borderRadius: "50%",
													width: "50px",
													height: "50px",
													margin: "0",
													border: "2px solid orange",
												}}
											/>
										</h2>

										<p>
											<cite>
												“I feel a recipe is only a theme which an intelligent
												cook can play each time with a variation.”
											</cite>{" "}
											— Madam Benoit.
										</p>
										<p>
											<cite>
												{" "}
												“Fifty thousand dollars’ worth of cabinets isn’t going
												to make you a better cook; cooking is going to make you
												a better cook. At the end of the day, you can slice a
												mushroom in about three inches of space, and you can
												carve a chicken in a foot and a half. So it doesn’t
												matter how big the kitchen is.”
											</cite>{" "}
											— Tyler Florence.
										</p>
										<p>
											<cite>
												{" "}
												“Taste as you go. When you taste the food throughout the
												cooking process, you can make adjustments as you go.”
											</cite>
											— Anne Burrell.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Home;