import logo from './logo.svg';
import './App.css';

function App() {

  console.log(process.env.NODE_ENV)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur le futur portfolio de Sébastien ETCHETO
        </p>
        <p>Ce site est en construction, si vous souhaitez me contacter:</p>
        <a href='mailto:sebastien.etcheto@gmail.com'>sebastien.etcheto@gmail.com</a>
      </header>
    </div>
  );
}

export default App;
