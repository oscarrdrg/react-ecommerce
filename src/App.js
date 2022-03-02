import Product from './components/Product';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'
import CheckoutCard from './components/CheckoutCard';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
        
        <Route exact path="/" component={Products}/>
        <Route exact path='/checkout-page' component={CheckoutPage}/>

      </Switch>
     
    </div></BrowserRouter>
    
  );
}

export default App;
