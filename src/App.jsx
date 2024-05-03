import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AbortionViews } from "./components/AbortionViews";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abortionviews" element={<AbortionViews />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
