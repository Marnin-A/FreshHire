import './WhyFreshHire.css';
import female from '../../assets/female_illustration.png';

const WhyFreshHire = () => {
    return (
        <div className='whyFreshHire__container'>
        <div className="whyFreshHire__top">
            <p className='whyFreshHire__title'>Why Fresh hire</p>
            <h1>New and easiest way to get a job and hire talents</h1>
            <br /><br /><br />
        </div>
            <div className="whyFreshHire">
                <div className="whyFreshHire__left">
                    <div className='whyFreshHire__left__content'>
                        <p>100% easy onboarding, No hassel</p>
                        <p>Over 10,000+ new jobs every week</p>
                        <p>We are partnered with world class companies</p>
                        <p>100% User friendly</p>
                        <p>Perfect hiring process</p>
                        <p>Proof of quality</p>
                        <p>Safe and secure</p>
                    </div>
                </div>
                <div className="whyFreshHire__right">
                    <div className='whyFreshHire__right__content'>
                        <h4>We’re the worlds best hiring platform</h4>
                        <div className='whyFreshHire__right__content__flex'>
                            <p style={{ fontSize: "2.5rem" }}>&#9734;</p>
                            <div>
                                <h2>4.9/5</h2>
                                <p>Employee and Employer rating</p>
                            </div>
                        </div>
                        <div className='whyFreshHire__right__content__flex'>
                            <p style={{ fontSize: "2.5rem" }}>&#9734;</p>
                            <div>
                                <h2>Award Winner</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={female} alt="" />
            </div></div>

    )
}

export default WhyFreshHire