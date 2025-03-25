import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
