import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/container/ItemListContainer';

function App() {
  return (
    <div>
    <h1 className='titulo'>Mi tienda en react</h1>
    <NavBar />
	  <ItemListContainer greetings="Catálogo de productos"/>
    </div>
  );
}

export default App;
