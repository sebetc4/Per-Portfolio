import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env.NODE_ENV);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenue sur le futur portfolio de</h1>
        <h1 class="title-link">
          <a href="./CV-Sebastien-ETCHETO.pdf">
            Sébastien ETCHETO
          </a>
        </h1>
        <h2>Développeur web full stack</h2>
        <p>
          Ce site est en construction, pour patienter vous pouvez visionner la
          présentation de l'un de mes projets:
        </p>
        <iframe
          src="https://www.youtube.com/embed/8wfDbHOJofE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>{" "}
        <p>Si vous souhaitez me contacter voici mon mail:</p>
        <a href="mailto:sebastien.etcheto@gmail.com">
          sebastien.etcheto@gmail.com
        </a>
      </header>
    </div>
  );
}

export default App;
