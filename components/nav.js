import {useState} from "react";

function Navbar(){
	
	const [sidebar,setSidebar] = useState("100%");
	const [scrollOff, setScrollOff] = useState("");

	const toggle = () =>{
		if(sidebar==="100%"){
			setSidebar("0");
			setScrollOff("body{overflow: hidden;}");
			console.log(sidebar);
			 
		}else {
			setSidebar("100%");
			setScrollOff("");
			console.log(sidebar);
		}
	} 


	return(
			<>	
				<nav>
					<div className="logo">Aksh</div>
					<div className="burger" onClick={toggle}>
						<img src="/menu.svg" />
					</div>
					<ul className="nav-links">
						<li className="navlink" onClick={toggle}><a href="#About">About</a></li>
						<li className="navlink" onClick={toggle}><a href="#Projects">Projects</a></li>
						<li className="navlink" onClick={toggle}><a href="#Contact">Contact</a></li>
						
					</ul>
				</nav>
				
				<style global jsx>{`

					nav {
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 8vh;

					}
					.logo {
						color: cyan;
						margin-left: 5vh;
						font-size: 1.9rem;
						font-family: monospace;
						cursor: pointer;
					}
					.nav-links {
						
						list-style: none;
						display: flex;
						
					}
					.burger {
						width: 30px;
						display: none;
						margin-right: 3vh;
						z-index: 2;
					}
					.navlink a{
						margin-right: 5vh;
						text-decoration: none;
						color: white;
					}



					@media only screen and (max-width: 900px) {
					  	.nav-links {
					  		position: absolute;
					  		top: 0px;
					  		right: 0px;
					  		height: 120vh;
					  		align-items: center;
					  		flex-direction: column;
					  		width: 100%;
					  		background: black;
					  		transform: translateX(${sidebar});
					  		transition: transform .5s ;

					  	}
					  	${scrollOff}
					  	
					  	.navlink{
					  		margin-top: 10vh;
					  	}
					  	.navlink a{
					  		font-size: 1.4rem;
					  		margin-right: 0;
					  	}
					  	.burger {
					  		display: block;
					  	}
					}

					`}</style>
			</>	
		)
}

export default Navbar;