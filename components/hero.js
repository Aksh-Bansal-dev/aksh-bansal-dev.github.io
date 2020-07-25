import Router from "next/router";
import Navbar from "./nav";

function Hero(){

	return(
			<div className="main">	
				<Navbar />
				<div className="heroHeading">
					<h1>Hi, <br/>
					 	I'm <span>Aksh</span>,<br/>
					 	web developer.
					 </h1>
					 <p>
						Frontend Developer
					 </p>
					 <button onClick={()=>Router.push("/#Contact")}>
					 	Contact Me
					 </button>

				</div>
				<style jsx>{`
					.main {
		  				background-image: url("./testImage.jpg");
		  				background-size: cover;
		  				background-position: center;
		  				background-repeat: no-repeat;
					}
					.heroHeading {
						width: 50%;
						padding-top: 30vh;
						padding-left: 15vh;
						color: white;
						height: 100vh;
						text-align: left;
						
					}
					.heroHeading h1 {
						font-size: 2.8rem;
						line-height: 1;
						letter-spacing: 2px;
					}
					.heroHeading span {
						color: cyan;
					}
					.heroHeading p {
						margin: 2vh 0vh;
						color: #b3b3b3;
						font-weight: 200;

					}
					.heroHeading button {
						letter-spacing: 1px;
						font-weight: 500;
						background: transparent;
						border: solid 2px cyan;
						color: cyan;
						width: 20vh;
						font-size: 1rem;
						padding: 1vh;
						cursor: pointer;
					}
					.heroHeading button :hover {
						background: cyan;
						color: black;
					}
					

					@media only screen and (max-width: 600px) {
					  	.main {
					  		background: rgb(2,36,43);
background: radial-gradient(circle, rgba(2,36,43,1) 0%, rgba(0,0,0,1) 88%);
					  	}
					  	.heroHeading {
					  		width: 100%;
					  		padding-left: 0;
					  		text-align: center;
					  		
					  	}
					  	
					}

					`}</style>
			</div>	
		)
}

export default Hero;