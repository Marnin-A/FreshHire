import React from 'react'
import './JobBoard.css'
import JobBoardCard from '../../components/jobBoardCard/JobBoardCard'
import {jobs} from "../../data/data"

const JobBoard = () => {
    return (
        <div className="jobBoard">
            <div className="jobBoardContainer">
                <div className="jobBoard__top">
                    <p className='jobBoard__title'>Job Board</p>
                    <h2>Discover carefully sorted jobs from around the world</h2>
                    <p>Kick start your career with our carefully sorted job ads</p>
                </div>
                <div className='jobBoard__middle'><p className='active'>Popular</p> <p>Latest</p></div>
                <div className="jobBoardCards">
                    {jobs.map(({id, brandImg,jobTitle,company, description, location, salaryRange, jobType}) => (
                        <JobBoardCard key={id} brandImg={brandImg} jobTitle={jobTitle} company={company} description={description} location={location} salaryRange={salaryRange} jobType={jobType}/>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default JobBoard