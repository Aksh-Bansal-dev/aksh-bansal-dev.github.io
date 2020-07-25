function Projects(){

	return (
			<div className="projects-back">
				<h1>
					<a  name="Projects">PROJECTS</a>
					
				</h1>
				<p>
					Coming soon...
				</p>
				
				<style jsx>{`

					.projects-back {
						height: 80vh;
						background: #000509;
						padding-top: 5vh;
						padding-left: 15vh;
					}
					h1 {
						color: cyan;
						font-size: 2.8rem;
						letter-spacing: 10px;
					}
					p {
						color: white;
						margin: 4vh 0vh;
						letter-spacing: 1px;
					}

					@media only screen and (max-width: 900px) {
					  	.projects-back {
					  		background: black;
							padding: 5vh 2vh;
							text-align: center;
					  	}
					  	
					  	
					}



					`}</style>
			</div>
		)
}

export default Projects;