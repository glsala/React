import logo from './logo.svg';
import './App.css';
import HelloWorld  from './components/HelloWorld';

function App() {

  const name = "Gabriel"
  return (
    <div className="App">
      {name}
      <HelloWorld />
    </div>
  );
}

export default App;
