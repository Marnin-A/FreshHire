import React from 'react'
import './JobBoardCard.css'

const JobBoardCard = ({brandImg,jobTitle,company, description, location, salaryRange, jobType}) => {
  return (
    <div className="jobBoardcard">
      <div className="jobBoardcard__top">
        <img src={brandImg} alt="" width={50} height={50} />
        <div className="jobBoardcard__tag">
          <p>{jobTitle}</p>
          <p>{company}</p>
        </div>
        <p className="jobBoardcard__arrow">&rarr;</p>
      </div>
      <p className="jobBoardcard__middle">{description}</p>
      <div className="jobBoardcard__bottom">
        <p>{location}</p>
        <p>{salaryRange}</p>
        <p>{jobType}</p>
      </div>
    </div>
  )
}

export default JobBoardCard