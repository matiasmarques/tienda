import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <h1 className='titulo'>Mi tienda en react</h1>
    <NavBar />
	  <ItemListContainer greetings="Catálogo de productos"/>
    </>
  );
}

export default App;
