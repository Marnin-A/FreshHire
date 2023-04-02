import React from 'react'
import './JobBoard.css'
import JobBoardCard from '../../components/jobBoardCard/JobBoardCard'

const JobBoard = () => {
    return (
        <div className="jobBoard">
            <div className="jobBoardContainer">
                <div className="jobBoardContainerTop">
                <p className='title'>Job Board</p>
                <h4>Discover carefully sorted jobs from around the world</h4>
                <p>Kick start your career with our carefully sorted job ads</p>
                </div>

                <div className="jobBoardCards">
                    <JobBoardCard />
                    <JobBoardCard />
                    <JobBoardCard />
                    <JobBoardCard />
                    <JobBoardCard />
                    <JobBoardCard />
                </div>

            </div>

        </div>
    )
}

export default JobBoard