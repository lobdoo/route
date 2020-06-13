import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </nav>
      </div>
    </Router>
  );
}
function Home() {
  return ( 
  <div>
    <h2>Home</h2>
    <h1>THIS IS HOME!</h1>
  </div>
  )
}
function Login() {
  return ( 
    <div>
      <h2>Home</h2>
      <h1>THIS IS LOGIN!</h1>
    </div>
    )
}
function About() {
  return ( 
    <div>
      <h2>Home</h2>
      <h1>THIS IS ABOUT!</h1>
    </div>
    )
  }


export default App;
