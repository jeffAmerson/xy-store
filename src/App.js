import { Provider } from "react-redux";
import store from "./components/store/store";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import CartPage from "./routes/CartPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
