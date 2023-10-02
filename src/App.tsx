import { useState } from "react";
import "./App.css";
import CerateProduct from "./components/CerateProduct";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Product from "./components/Product";
import CardsList from "./components/cards/CardsList";
import { cards } from "./components/cards/OneCard";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, error, products } = useProducts();
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <Error error={error} />}

        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}

        <hr />
        {/* <div className="wrapper">
        <CardsList cards={cards}/>
      </div> */}
        {modal && (
          <Modal title="Create new product" onClose={() => setModal(false)}>
            <CerateProduct />
          </Modal>
        )}
        <button 
        onClick={() => setModal(true)} 
        className="bg-black text-white px-4">Show modal</button>
      </div>
    </>
  );
}

export default App;
