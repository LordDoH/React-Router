import './App.css';
import {Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <nav className="main-header">
        <Link className="main-header__link" to="/">Home</Link>
        <Link className="main-header__link" to="/pricing">Pricing</Link>
        <Link className="main-header__link" to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
