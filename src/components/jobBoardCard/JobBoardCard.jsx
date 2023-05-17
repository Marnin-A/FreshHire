import React from 'react'
import './JobBoardCard.css'
import Place from '../../assets/Place.png'

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
        <div className='jobBoardcard__bottom__location'><img src={Place} alt="" /> <p>{location}</p></div>
        <p>{salaryRange}</p>
        <p>{jobType}</p>
      </div>
    </div>
  )
}

export default JobBoardCard