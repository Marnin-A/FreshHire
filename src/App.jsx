import Home from "./pages/home/home";
import About from "./pages/about/about";
import Blog from "./pages/blog/Blog";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import JobListing from "./pages/jobListing/JobListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from "./pages/postJob/postJob";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post_job" element={<PostJob />} />
            <Route path="/job_listing" element={<JobListing />} />
          </Routes>
        </SmoothScroll>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
