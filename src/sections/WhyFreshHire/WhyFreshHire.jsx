import "./WhyFreshHire.css";
import female from "../../assets/female_illustration.png";
import wavyCheck from "../../assets/Wavy_Check.png";
import award from "../../assets/award.png";
import star from "../../assets/star.png";

const WhyFreshHire = () => {
  return (
    <div className="whyFreshHire__container">
      <div className="whyFreshHire__top">
        <p className="whyFreshHire__title">
          Why <span id="whyFreshHire__title">Freshire?</span>
        </p>
        <h1>New and easiest way to get a job and hire talents</h1>
        <br />
        <br />
        <br />
      </div>
      <div className="whyFreshHire">
        <div className="whyFreshHire__left">
          <div className="whyFreshHire__left__content">
            <p>
              <img src={wavyCheck} alt="" />
              <span>100% easy onboarding, No hassel</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>Over 10,000+ new jobs every week</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>We are partnered with world class companies</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>100% User friendly</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>Perfect hiring process</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>Proof of quality</span>
            </p>
            <p>
              <img src={wavyCheck} alt="" />
              <span>Safe and secure</span>
            </p>
          </div>
        </div>
        <div className="whyFreshHire__right">
          <div className="whyFreshHire__right__content">
            <h4>We’re the worlds best hiring platform</h4>
            <div className="whyFreshHire__right__content__flex">
              <img src={star} alt="star" />
              <div>
                <h2>4.9/5</h2>
                <p>Employee and Employer rating</p>
              </div>
            </div>
            <div className="whyFreshHire__right__content__flex">
              <img src={award} alt="award" />
              <div>
                <h2>Award Winner</h2>
                <p>2 Times award winning job platform of the year</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="whyFreshHire__female__illustration"
          src={female}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyFreshHire;
