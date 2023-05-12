import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactUs from "./pages/contactUs/ContactUs";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import JobListing from "./pages/jobListing/JobListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from "./pages/postJob/postJob";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/post_job" element={<PostJob />} />
          <Route path="/job_listing" element={<JobListing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
