import './JobListingBody.css'
import amazon from '../../assets/amazon_logo.png'
import chart from '../../assets/Chart_Line.svg'
import user from '../../assets/User_Remove.svg'
import location from '../../assets/location.png'
import flag from '../../assets/Flag.svg'
import bookmark from '../../assets/Bookmark.svg'
import arrow from "../../assets/Caret_Up_SM.svg";

const jobListingData = [
    {
        id: 1,
        companyLogo: amazon,
        companyName: "Amazon",
        roleTitle: "Figma UI/UX Design",
        roleType: "onSite",
        roleDesc: "We are seeking a talented UI/UX Designer to join our team on-site. As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces that meet the needs of our clients and end-users. You will work closely with our development team to ensure that the design elements are seamlessly integrated into the final product. The ideal candidate should have a strong understanding of design principles, typography, color theory, and user experience. Additionally, proficiency in tools such as Sketch, Figma, Adobe Creative Suite, and prototyping tools is required.",
        roleApplicants: 10,
        roleLocation: "Nigeria",
        roleSalary: "Negotiable",
        roleOtherDetails: ["Full time", "Entry Level"],
        roleTimeOfPost: "1hr ago"

    },
    {
        id: 2,
        companyLogo: amazon,
        companyName: "Amazon",
        roleTitle: "Front End Developer",
        roleType: "Hybrid",
        roleDesc: "We are looking for an experienced Front End Developer to join our team. As a Front End Developer, you will be responsible for developing and maintaining our web-based applications, ensuring high performance and responsiveness. You will work closely with the UI/UX design team to ensure seamless integration of design elements into the final product. The ideal candidate should have a strong understanding of HTML, CSS, JavaScript, and responsive design frameworks such as Bootstrap and Materialize",
        roleApplicants: 10,
        roleLocation: "Nigeria",
        roleSalary: "Negotiable",
        roleOtherDetails: ["Full time", "Middle level", "Entry-level"],
        roleTimeOfPost: "2hrs ago"

    },
    {
        id: 3,
        companyLogo: amazon,
        companyName: "Amazon",
        roleTitle: "Back End Developer",
        roleType: "Remote",
        roleDesc: "We are seeking a talented UI/UX Designer to join our team on-site. As a UI/UX Designer, you will be responsible for creating visually appealing and user-friendly interfaces that meet the needs of our clients and end-users. You will work closely with our development team to ensure that the design elements are seamlessly integrated into the final product. The ideal candidate should have a strong understanding of design principles, typography, color theory, and user experience. Additionally, proficiency in tools such as Sketch, Figma, Adobe Creative Suite, and prototyping tools is required.",
        roleApplicants: 10,
        roleLocation: "Nigeria",
        roleSalary: "Negotiable",
        roleOtherDetails: ["Full time", "Entry Level", "Middle level", "Full time", "Entry Level", "Middle level"],
        roleTimeOfPost: "3hrs ago"

    }
]


const JobListingBody = () => {
    return (
        <div className='jobListingBody'>
            <div className="jobListingBody__top">
                <div>
                    <p><span style={{color: "#0F5E36", fontWeight: "bold"}}>80</span> <span>jobs found</span></p>
                </div>
                <div>
                    <span>sort</span>
                    <div>
                        <p>Newest</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>

            {jobListingData.map(({ id, companyLogo, companyName, roleApplicants, roleDesc, roleOtherDetails, roleTitle, roleLocation, roleSalary, roleTimeOfPost, roleType }) => (
                <div className="jobListingSingleContainer" key={id}>
                    <div className='jobListingSingle__top'>
                        <img src={companyLogo} alt="company_logo" />
                        <div>
                            <p style={{ color: "#7A7A7A", fontWeight: "bold" }}>{companyName}</p>
                            <h3 style={{ color: "#0F5E36" }}>{roleTitle}</h3>
                            <p style={{ color: "#B4B4B4" }}><small>- {roleType} -</small></p>
                        </div>

                        <p className='jobListingSingle__top__right'><img src={flag} alt="flag" />
                            <img src={bookmark} alt="bookmark" /></p>
                    </div>
                    <div className="jobListingSingle__body">
                        <p style={{color: "#585858"}}>{roleDesc} <span style={{color: "gray"}}> See more...</span></p>
                    </div>
                    <div className="jobListingSingle__bottom">
                        <p><img src={user} alt="user" /><span>Applicants: {roleApplicants}</span></p>
                        <p><img src={location} alt="location" /><span>{roleLocation}</span></p>
                        <p><img src={chart} alt="chart" /><span>{roleSalary}</span></p>
                    </div>
                    <div className="jobListingSingle__bottom_b">

                        {roleOtherDetails.map((otherDetails, index) => (
                            <p key={index}>{otherDetails}</p>
                        ))}
                    </div>
                    <p className='jobListing_timePosted'>Posted {roleTimeOfPost}</p>
                </div>
            ))}
        </div>
    )
}

export default JobListingBody