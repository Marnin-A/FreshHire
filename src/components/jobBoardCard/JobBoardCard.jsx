import React from 'react'
import './JobBoardCard.css'

const JobBoardCard = () => {
  return (
    <div className="card">
      <div className="top">
        <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-circle-512.png" alt="" width={50} height={50}/>
        <div className="tag">
          <p>UI/UX Designer</p>
          <p>Snapchat</p>
        </div>
        <p className="arrow">&rarr;</p>
      </div>
      <p className="middle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, inventore quia voluptatibus molestias laboriosam nihil?</p>
      <div className="bottom">
        <p>USA</p>
        <p>3000N - 5000/Month</p>
        <p>Remote</p> 
      </div>
    </div>
  )
}

export default JobBoardCard