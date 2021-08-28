import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import { useContext ,useEffect} from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
