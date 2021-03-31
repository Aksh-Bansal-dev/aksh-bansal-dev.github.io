import Card from "./card";

function Projects() {
  return (
    <div className="projects-back">
      <h1>
        <a name="Projects">PROJECTS</a>
      </h1>
      <p>
        <Card
          url="https://github.com/Aksh-Bansal-dev/URLshortener"
          title="URL shortener"
          description="Shortens url"
        />
        <Card
          url="https://github.com/Aksh-Bansal-dev/ChatApp"
          title="Chat App"
          description="A simple chat app built using web sockets"
        />
        <Card
          url="https://github.com/Aksh-Bansal-dev/PathfindingAlgo-Visualization"
          title="Path Finding Algo"
          description="Visualization of Path Finding Algorithms like A*, Dijkstra, etc."
        />
      </p>

      <style jsx>{`
        .projects-back {
          min-height: 80vh;
          background: #000509;
        }
        h1 {
          color: cyan;
          font-size: 2.8rem;
          letter-spacing: 10px;
          padding-top: 5vh;
          padding-left: 15vh;
        }
        p {
          color: white;
          margin: 4vh 7vh;
          width: 90%;
          letter-spacing: 1px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        @media only screen and (max-width: 900px) {
          .projects-back {
            background: black;
            text-align: center;
          }
          h1 {
            padding: 5vh 2vh;
          }
          p {
            flex-direction: column;
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
