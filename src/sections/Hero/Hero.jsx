import heroImage from "../../assets/hero__image.png"
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__left">
                    <h1>The Best Place To Hire Talents And Find Your Dream Job</h1>
                    <p>Find the best jobs, Research fast growing companies and hire awesome talents.</p>
                    <div className="hero__left__postjob">
                        <button>Post Job</button>
                        <p>Apply for jobs</p>
                    </div>
                    <div className="hero__left__bottom">
                        <p>Early Onboarding</p>
                        <p>1000 new jobs</p>
                    </div>
                </div>

                <div className="hero__right">
                    <img src={heroImage} alt="hero image" />
                </div>
            </div>

        </div>
    )
}

export default Hero