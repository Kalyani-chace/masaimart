import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WishLisst from "./components/WishLisst";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/wishlist" element={<WishLisst />}></Route>
          </Routes>
          {/* <Products /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
