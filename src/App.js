import Products from "./components/Products";

import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((store) => store.ecom.showModal);
console.log(showModal)
  return (
    <>
      {showModal && <div id="modal"></div>}
      <div className="app">
        <header>
          <h2>Available Products</h2>
        </header>
        <main>
          <Products />
        </main>
      </div>
    </>
  );
}

export default App;
