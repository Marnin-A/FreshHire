import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Help from "./pages/help/help";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "help", element: <Help /> },
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
