import {useState} from "react";

function Navbar(){
	
	const [sidebar,setSidebar] = useState("nav-links");
	const toggle = () =>{
		if(sidebar==="nav-links"){
			setSidebar("navOpen");
			console.log(sidebar);
			 
		}else {
			setSidebar("nav-links");
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
					<ul className={sidebar}>
						<li className="navlink" onClick={toggle}><a href="#About">About</a></li>
						<li className="navlink" onClick={toggle}><a href="#Projects">Projects</a></li>
						<li className="navlink" onClick={toggle}><a href="#Contact">Contact</a></li>
						
					</ul>
				</nav>
				
				<style jsx>{`

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
					.nav-links , .navOpen {
						
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
					  		height: 100vh;
					  		align-items: center;
					  		flex-direction: column;
					  		width: 100%;
					  		background: black;
					  		transform: translateX(100%);
					  		transition: transform .5s ;
					  	}
					  	.navOpen {
							transform: translateX(0);
							position: absolute;
					  		top: 0px;
					  		right: 0px;
					  		height: 100vh;
					  		align-items: center;
					  		flex-direction: column;
					  		width: 100%;
					  		background: black;
					  		transition: transform .5s ;
						}
					  	.navlink{
					  		margin-top: 5vh;
					  	}
					  	.navlink a{
					  		font-size: 1.4rem;
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