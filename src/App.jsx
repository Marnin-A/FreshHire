import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactUs from "./pages/contactUs/ContactUs";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "FreshHire/", element: <Home /> },
    { path: "FreshHire/about", element: <About /> },
    { path: "FreshHire/contact_us", element: <ContactUs /> },
  ]);
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
