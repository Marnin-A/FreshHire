import React from 'react'
import './HowItWorks.css'
import HowItWorksCard from '../../components/howItWorksCard/HowItWorksCard'

const HowItWorks = () => {
  return (
    <div className="howItWorks">
            <div className="howItWorksContainer">
                <div className="howItWorksContainerTop">
                <p className='title'>How It Works</p>
                <h4>Getting Started With FreshHire is Easy</h4>
                <p>You create your profile and we help you find your dream job from the world</p>
                </div>

                <div className="howItWorksCards">
                    {/* <howItWorksCard />
                    <howItWorksCard />
                    <howItWorksCard />
                    <howItWorksCard />
                    <howItWorksCard />
                    <howItWorksCard /> */}
                    <HowItWorksCard />
                    <HowItWorksCard />
                    <HowItWorksCard />
                    <HowItWorksCard />
                </div>

            </div>

        </div>
  )
}

export default HowItWorks