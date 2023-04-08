import React from "react";
import JobBoard from "../../sections/JobBoard/JobBoard";
import HowItWorks from "../../sections/HowItWorks/howItWorks";
import AboutUsSection from "../../sections/AboutUsSection/AboutUsSection";
import WhyFreshHire from "../../sections/WhyFreshHire/WhyFreshHire";
import Hero from "../../sections/Hero/Hero";
import Companies from "../../sections/companies/Companies";


export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <AboutUsSection />
      <WhyFreshHire />
      <HowItWorks />
      <JobBoard />
    </div>
  );
}
