import "./App.css";
import { Home } from "./pages/home";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
