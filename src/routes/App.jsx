import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../styles/components/main.css";
import { Productsbar } from "../components/Productsbar";
import { ProductInformation } from "../containers/ProductInformation";
import { LogInInterface } from "../containers/LogInInterface";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/register-purchase"
          element={<ProductInformation />}
        ></Route>
        <Route path="/sign-in" element={<LogInInterface />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
