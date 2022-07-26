import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import {Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";


export const config = {
  endpoint: `https://rkqkart-frontend.herokuapp.com/api/v1`,
};

function App() {
  
  return (
   <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/products" component={Products} /> */}
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path="/checkout" component={Checkout} />
        <Route path="/thanks" component={Thanks} />
        
        <Route exact path="/" component={Products} />
      </Switch>
     
     </div>
    
    
  );
}

export default App;
