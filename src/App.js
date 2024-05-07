import Products from "./components/Products";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
    <div className="app">
      <header>
      <h2>Available Products</h2>
      </header>
      <main>
        <Products />

      </main>
      
    </div>
    </Provider>

  );
}

export default App;
