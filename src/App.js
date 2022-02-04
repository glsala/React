import logo from './logo.svg';
import './App.css';
import HelloWorld  from './components/HelloWorld';
import List from './components/List'

function App() {

  const name = "Gabriel"
  return (
    <div className="App">
      {name}
      <HelloWorld />
      <List />
    </div>
  );
}

export default App;
