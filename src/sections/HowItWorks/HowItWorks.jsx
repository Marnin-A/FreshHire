import React from "react";
import "./HowItWorks.css";
import HowItWorksCard from "../../components/howItWorksCard/HowItWorksCard";
import personalData from "../../assets/PersonalData.png";
import { howItWorks } from "../../data/data";
// import { IoCheckmarkCircleOutline } from 'react-icons/io'

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorksContainer">
        <div className="howItWorks__top">
          <p className="howItWorks__title">How It Works</p>
          <h2>Getting Started With FreshHire is Easy</h2>
          <p>
            You create your profile and we help you find your dream job from the
            world
          </p>
        </div>

        <div className="personalData">
          <div className="personalData__left">
            <img src={personalData} alt="personal Data" />
          </div>
          <div className="personalData__right">
            <div className="personalData__right__top">
              <h3>Fill your Personal Info</h3>
              <p>
                Complete your registration, upload your resume and cover letter
                to start exploring jobs that match you.
              </p>
            </div>
            <div className="personalData__right__bottom">
              <p>
                <span>Easy applying:</span> Create a captivating account{" "}
              </p>
              <p>
                <span>Explore Jobs:</span>Upload your resume and other required
                documents to find best jobs that match you.
              </p>
            </div>
          </div>
        </div>

        <div className="howItWorksCards">
          {howItWorks.map(({ step, stepTitle, stepDesc }) => (
            <HowItWorksCard
              key={step}
              step={step}
              stepTitle={stepTitle}
              stepDesc={stepDesc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
