import "./App.css";
import { Home } from "./pages/home";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
