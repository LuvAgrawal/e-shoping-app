import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/layout/Layout";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import Modal from "./component/layout/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="test" element={<Modal/>}/>
        <Route path="product" element={<ShopPage />} />
          <Route path="product/:name" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
