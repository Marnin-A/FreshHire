import React from "react";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import WhyFreshHire from "../../sections/WhyFreshHire/WhyFreshHire";
import Hero from "../../sections/Hero/Hero";
import Companies from "../../sections/companies/Companies";
import JobBoard from "../../sections/jobBoard/JobBoard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      {/* <AboutUsSection /> */}
      <WhyFreshHire />
      <HowItWorks />
      <JobBoard />
    </div>
  );
}
