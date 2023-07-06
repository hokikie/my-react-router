import Root from './pages/Root';
import About from './pages/About';
import { Router, Route } from './lib/react-router';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={<Root />} />
      <Route path='/about' component={<About />} />
    </Router>
  );
}

export default App;
