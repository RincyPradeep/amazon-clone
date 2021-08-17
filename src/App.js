import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
