import App from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  	<>
  		<Head>
  			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
  			 <link rel="shortcut icon" type="image/x-icon" href="./briefcase.png" />
  			<title>Aksh Bansal</title>
  		</Head>
  		<Component {...pageProps} />
  		<style global jsx>{`
  			*{
  				margin: 0vh;
  				padding: 0vh;
  				box-sizing: border-box;
  				font-family: 'Poppins', sans-serif;
  				user-select: none;

  			}
  			html{
  				overflow-x: hidden;
  			}
  			

  			`}</style>
  	</>
  	)
}


export default MyApp;