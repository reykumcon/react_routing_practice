import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/:word" />
        <Home path="/:word/:font/:background" />
      </Router>
    </div>
  );
}

export default App;
