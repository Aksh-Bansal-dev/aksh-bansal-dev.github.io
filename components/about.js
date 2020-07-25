function About(){

	return (
			<div className="about-back">
				<h1>
					<a  name="About">ABOUT</a>
					
				</h1>
				<p>
					I'm a learning web developers, who loves to solve problems and learn <br/>
					new things. I'm experienced in frontend technologies including <strong>HTML</strong>,<br/>
					<strong>CSS</strong>, <strong>JS</strong>, <strong>React</strong> and <strong>Next.js</strong>.
				</p>
				<p>
					Currently studying Computer Science at IIIT and exploring my <br/>interests.
				</p>
				<style jsx>{`

					.about-back {
						height: 80vh;
						background: #000509;
                        background: linear-gradient(0deg, #000509 0%, #001617 49%, #000509 100%);
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
					  	.about-back {
					  		background: black;
							padding: 5vh 2vh;
							text-align: center;
					  	}
					  	
					  	
					}


					`}</style>
			</div>
		)
}

export default About;