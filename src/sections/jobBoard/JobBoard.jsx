import React, { useState } from 'react'
import './JobBoard.css'
import JobBoardCard from '../../components/jobBoardCard/JobBoardCard'
import {jobs} from "../../data/data"

const JobBoard = () => {
    
    const [showAll, setShowAll] = useState(3);
    const allJobs = jobs.slice(0, showAll)
    const showAllJobs = (e) => {
        e.preventDefault()
        setShowAll(9)
    }
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
                    {allJobs.map(({id, brandImg,jobTitle,company, description, location, salaryRange, jobType}) => (
                        <JobBoardCard key={id} brandImg={brandImg} jobTitle={jobTitle} company={company} description={description} location={location} salaryRange={salaryRange} jobType={jobType}/>
                    ))}
                </div>
               {allJobs.length < 4 ? ( <div className="jobBoard__bottom">
                    <p>Didn't find jobs that match you? <span onClick={showAllJobs}>View all jobs &rarr;</span></p>
                </div>) : null}
            </div>

        </div>
    )
}

export default JobBoard