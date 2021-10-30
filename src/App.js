import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';


function App() {
  return (
  <>
  <CartProvider>
     <BrowserRouter>
        <NavBar />
	      <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/auto/:idCategoria">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/MiCuenta">
            <h1>Mi cuenta</h1>
          </Route>
          <Route exact path="/cart">
            <CartScreen/>
          </Route>
          <Route path="*">
              <Redirect to="/"/>
          </Route>
        </Switch>
    </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
