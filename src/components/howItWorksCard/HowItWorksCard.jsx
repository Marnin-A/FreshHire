import React from 'react'
import './HowItWorksCard.css'

const HowItWorksCard = ({step, stepTitle, stepDesc}) => {
  return (
    <div className='howItWorksCard'>
        <p><strong>{step}</strong></p>
        <h3>{stepTitle}</h3>
        <p>{stepDesc}</p>
    </div>
  )
}

export default HowItWorksCard