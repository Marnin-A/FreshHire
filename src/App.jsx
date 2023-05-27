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
            <Route path="FreshHire/" element={<Home />} />
            <Route path="FreshHire/about" element={<About />} />
            <Route path="FreshHire/blog" element={<Blog />} />
            <Route path="FreshHire/post_job" element={<PostJob />} />
            <Route path="FreshHire/job_listing" element={<JobListing />} />
          </Routes>
        </SmoothScroll>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
