import Hero from "../components/hero";
import Navbar from "../components/nav";
import About from "../components/about";
import Projects from "../components/projects";
import Router from "next/router";

function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />

      <footer>
        <a name="Contact"></a>
        <div className="links">
          <a href="https://github.com/Aksh-Bansal-dev">
            <img src="./GitHub-Mark-Light-32px.png" />
          </a>
          <a href="https://linkedin.com/in/aksh-bansal-0a1073200">
            <img src="./LI-In-Bug.png" className="linkedin" />
          </a>
          <a href="mailto:akshbansal321@gmail.com">
            <img src="./email.png" className="linkedin" />
          </a>
        </div>
      </footer>

      <style jsx>{`
        footer {
          background: #000509;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .links {
          height: 15vh;
          border-top: #404040 solid 2px;
          width: 1200px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        img {
          margin-right: 5vh;
          cursor: pointer;
        }
        .linkedin {
          width: 32px;
        }
      `}</style>
    </>
  );
}

export default Homepage;
