import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'; 

function App() {

  const[{user}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if(authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user:authUser
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>

        <Route exact path="/" component={Products}/>
        <Route exact path='/checkout-page' component={CheckoutPage}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>

      </Switch>
     
    </div></BrowserRouter>
    
  );
}

export default App;
