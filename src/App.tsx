import "./App.css";
import Product from "./components/Product";
import CardsList from "./components/cards/CardsList";
import { cards } from "./components/cards/OneCard";
import { useProducts } from "./hooks/products";


function App() {
  const{loading, error, products} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
     {loading && <p className="taxt-center">Loadding...</p>} 
     {error && <p className="taxt-center">Error...</p>}

      {products.map(product => <Product product={product} key={product.id}/>)}

      <hr />
      <div className="wrapper">
        <CardsList cards={cards}/>
      </div> 
    </div>
  );
}

export default App;
