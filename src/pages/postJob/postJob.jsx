import "./postJob.css"
import cheerfulwoman from '../../assets/cheerful-woman.png'
import profile from '../../assets/Profile.png'
import messageIcon from '../../assets/messageIcon.png'
import manage from '../../assets/Vector.png'
import postJob from '../../assets/Vector-1.png'
import password from '../../assets/Vector-2.png'
import logout from '../../assets/Vector-3.png'

const PostJob = () => {
    return (
        <div className="postJob">
            <div className="postJob__container">
                <div className="postJob__left">
                    <div className="postJob__left__top">
                        <img src={cheerfulwoman} alt="cheerful-woman" />
                        <div className="postJob__left__top__desc">
                            <p>Stargirl Inc</p>
                            <p><small>Tech Company</small></p>
                        </div>

                    </div>
                    <div className="postJob__left__bottom">
                        <p><img src={profile} alt="" /><span>Profile</span></p>
                        <p><img src={manage} alt="" /><span>Manage</span></p>
                        <p><img src={postJob} alt="" /><span>Post a job</span></p>
                        <p><img src={messageIcon} alt="" /><span>Messages</span></p>
                        <p><img src={password} alt="" /><span>Change Password</span></p>
                        <p><img src={logout} alt="" /><span>Logout</span></p>
                    </div>
                </div>
                <form className="postJob__right">
                    <p className="postJob__right__title">Post a job</p>
                    <div className="postJob__inputs">
                        <div className='input__component'>
                            <label>Job Title</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Email Address</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Job Type</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Job Tags</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Company size</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Job Location</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Number of people</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>How soon do you want to hire</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Show pay by</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Minimum salary</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Maximum salary</label>
                            <input type="text" />
                        </div>
                        <div className='input__component'>
                            <label>Rate</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='input__component' style={{ marginTop: '2rem', paddingInline: "1rem" }}>
                        <label>Job Description</label>
                        <input type="text" />
                    </div>
                    <div className="postJob__check"><input type="checkbox" /> <p>by clicking on this, you have accepted our terms and conditions on job posting</p></div>
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}

export default PostJob;