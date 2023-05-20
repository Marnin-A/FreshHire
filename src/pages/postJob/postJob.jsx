import "./postJob.css";
import cheerfulwoman from "../../assets/cheerful-woman.webp";
import profile from "../../assets/User_Circle.svg";
import messageIcon from "../../assets/Chat.svg";
import manage from "../../assets/Suitcase.svg";
import postJob from "../../assets/Book_Open.svg";
import password from "../../assets/Lock_Open.svg";
import logout from "../../assets/Swicht_Left.svg";
import arrow from "../../assets/Caret_Up_SM.svg";

const PostJob = () => {
  return (
    <div className="postJob">
      <div className="postJob__container">
        <div className="postJob__left">
          <div className="postJob__left__top">
            <img src={cheerfulwoman} alt="cheerful-woman" />
            <div className="postJob__left__top__desc">
              <p>Stargirl Inc</p>
              <p>
                <small>Tech Company</small>
              </p>
            </div>
          </div>
          <div className="postJob__left__bottom">
            <p>
              <img src={profile} alt="" />
              <span>Profile</span>
            </p>
            <p>
              <img src={manage} alt="" />
              <span>Manage</span>
            </p>
            <p>
              <img src={postJob} alt="" />
              <span>Post a job</span>
            </p>
            <p>
              <img src={messageIcon} alt="" />
              <span>Messages</span>
            </p>
            <p>
              <img src={password} alt="" />
              <span>Change Password</span>
            </p>
            <p>
              <img src={logout} alt="" />
              <span>Logout</span>
            </p>
          </div>
        </div>
        <form className="postJob__right">
          <p className="postJob__right__title">Post a job</p>
          <div className="postJob__inputs">
            <div className="input__component">
              <label>Job Title</label>
              <input type="text" />
            </div>
            <div className="input__component">
              <label>Email Address</label>
              <input type="text" />
            </div>
            <div className="input__component">
              <label>Job Type</label>
              <input type="text" />
            </div>
            <div className="input__component">
              <label>Job Tags</label>
              <input type="text" />
            </div>
            <div className="input__component">
              <label>Job Location</label>
              <input type="text" />
            </div>
            <div className="input__component">
              <label>Salary Range</label>
              <input type="text" />
            </div>
          </div>
          <div className="input__component">
            <label>Job Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="postJob__check">
            <input type="checkbox" />{" "}
            <p>
              by clicking on this, you have accepted our terms and conditions on
              job posting
            </p>
          </div>
          <button>Post a Job</button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
