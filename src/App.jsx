import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactUs from "./pages/contactUs/ContactUs";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="FreshHire/" element={<Home />} />
          <Route path="FreshHire/about" element={<About />} />
          <Route path="FreshHire/contact_us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
