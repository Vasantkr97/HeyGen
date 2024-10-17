import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Spokesperson from "./components/Spokesperson";
import Hero1 from "./components/Hero1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./utils/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Spokesperson />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
