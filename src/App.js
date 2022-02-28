import Product from './components/Product';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Products/>
    </div>
  );
}

export default App;
