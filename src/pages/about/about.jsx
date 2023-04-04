import React from "react";
import styles from "./about.module.css";
import UsersImg from "../../assets/Component3.png";
import Logo from "../../assets/Fresh_hire.png";
import StatsImg from "../../assets/Frame154.png";
import ProfileImg1 from "../../assets/rafiki.png";
import ProfileImg2 from "../../assets/cuate.png";
import ProfileImg3 from "../../assets/cuate1.png";
import ProfileImg4 from "../../assets/cuate2.png";
import PremProfileImg from "../../assets/amico.png";
import PremProfileImg1 from "../../assets/pana.png";
import PremProfileImg2 from "../../assets/cuate.png";
import PremProfileImg3 from "../../assets/pana1.png";
import ProfileCard from "../../components/profileCard/ProfileCard";

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.explore}>
        <div className={styles.explore_header}>
          About {"\u00A0"} <img src={Logo} alt="" />
        </div>
        <div className={styles.explore_body}>
          <div className={styles.explore_body_left}>
            <h3>Welcome to Fresh Hire,</h3>
            <p>
              the job platform designed specifically for fresh graduates and
              employers seeking to connect with them. We understand that finding
              a job after graduation can be challenging, which is why we've
              created a platform that helps bridge the gap between job seekers
              and potential employers.
            </p>
            <p>
              For job seekers, Fresh Hire offers an easy-to-use platform to
              search for job opportunities based on their qualifications,
              experience, and interests. We work with top employers in a variety
              of industries to bring you the latest job openings, internships,
              and entry-level positions. Our job search tool is designed to make
              the job hunting process efficient and stress-free.
            </p>
            <p>
              For employers, Fresh Hire provides a platform to find the best and
              brightest young talent. We know how important it is to find the
              right employees to help grow your business, which is why we only
              work with top-quality candidates who are committed to success. Our
              user-friendly job posting system allows you to quickly and easily
              advertise job openings to our network of qualified job seekers.
            </p>
            <p>
              At Fresh Hire, our mission is to create a seamless connection
              between job seekers and employers, and to help young professionals
              kickstart their careers. We believe that every graduate deserves a
              fair shot at a fulfilling career, and we're committed to helping
              you achieve your goals.
            </p>
            <p>
              Thank you for choosing Fresh Hire, and we look forward to working
              with you!
            </p>
          </div>
          <div className={styles.explore_body_right}>
            <img src={StatsImg} alt="Site statistics" />
          </div>
        </div>
        <button className={styles.explore_btn}>Explore more</button>
      </section>
      <section className={styles.difference}>
        <div className={styles.difference_top}>
          <div className={styles.difference_top_header}>
            <span>The </span>
            <span>Fresh </span>
            <span> hire </span>
            <span>Difference</span>
          </div>
        </div>
        <div className={styles.difference_bottom}>
          <div className={styles.difference_bottom_header}>
            <h3>
              Job seekr get the inside scoop, employer hare what makes them
              proud
            </h3>
          </div>
          <div id={styles.users}>
            <img src={UsersImg} alt="Users image" />
          </div>
          <div className={styles.difference_bottom_info}>
            <div className={styles.difference_info}>
              <h3>Reach</h3>
              <p>Stay top of mind with engaged quality candidate</p>
            </div>
            <div className={styles.difference_info}>
              <h3>Influence</h3>
              <p>Tell a persuasive story to engage and have diverse talents</p>
            </div>
            <div className={styles.difference_info}>
              <h3>Listen</h3>
              <p>Uncover actionable insight to drive improvement</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.free_profile}>
        <div className={styles.profile_header}>
          <h3 id={styles.profile_header}>Free Employee Profile</h3>
        </div>
        <div id={styles.profile_mid}>
          By creating your professional profile on our platform, you can
          showcase your skills and experience to potential employers, helping
          you stand out in a crowded job market
        </div>
        <div className={styles.free_profile_bottom}>
          <ProfileCard
            img={ProfileImg1}
            header="Tell your story"
            text="Your employee profile is an opportunity to showcase your unique strengths and experiences. Use this space to tell your story and highlight what sets you apart from other job seekers. By giving employers a glimpse into your personality and background, you can make a strong impression and increase your chances of landing your dream job."
          />
          <ProfileCard
            img={ProfileImg2}
            header="Reach and engage"
            text="With Fresh Hire's employee profiles, you can not only read about potential candidates, but also engage with them directly. Our platform allows you to ask questions, share job opportunities, and start conversations with talented graduates who could be a great fit for your organization."
          />
          <ProfileCard
            img={ProfileImg3}
            header="Go Beyond Reading Reviews"
            text="While reviews can be helpful, they only provide a limited view of a candidate's potential. With Fresh Hire's employee profiles, you can get a more comprehensive understanding of a candidate's skills, experience, and personality. By going beyond reading reviews, you can make more informed hiring decisions and find the right person for the job."
          />
          <ProfileCard
            img={ProfileImg4}
            header="Do More with Touch Analytics"
            text="Fresh Hire's employee profiles come with touch analytics, which allows you to track who has viewed your profile and how they have engaged with your content. By using this data to optimize your profile, you can increase your visibility to potential employers and attract more job opportunities."
          />
        </div>
        <div>
          <button className={styles.get_started_btn}>
            Get started for free
          </button>
        </div>
      </section>
      <section className={styles.free_profile}>
        <div className={styles.profile_header}>
          <h3 id={styles.profile_header}>Premium Employee Profile</h3>
        </div>
        <div id={styles.profile_mid}>
          By upgrading to our premium version and creating a professional
          profile on our platform, you can effectively highlight your skills and
          experience to potential employers, making yourself more noticeable in
          a highly competitive job market
        </div>
        <div className={styles.free_profile_bottom}>
          <ProfileCard
            img={PremProfileImg}
            header="Amplify Your Why"
            text="Your employee profile is an opportunity to showcase your unique strengths and experiences. Use this space to tell your story and highlight what sets you apart from other job seekers. By giving employers a glimpse into your personality and background, you can make a strong impression and increase your chances of landing your dream job."
          />
          <ProfileCard
            img={PremProfileImg1}
            header="Own Your Space"
            text='With the premium version of Fresh Hire&apos;s employee profiles, you can amplify your " why " and showcase your personal brand to potential employers. By using our platform to create a more detailed and compelling profile, you can increase your chances of standing out from other job seekers and landing your dream job.'
          />
          <ProfileCard
            img={PremProfileImg2}
            header="Engage and Influence Specific Employers"
            text="With the premium version of our employee profiles, you can engage and influence specific employers by using our platform's advanced search features. By targeting employers who are a good fit for your skills and experience, you can increase your chances of getting noticed and landing a job that aligns with your career goals."
          />
          <ProfileCard
            img={PremProfileImg3}
            header="Beat the Competition"
            text="With the premium version of Fresh Hire's employee profiles, you can beat the competition and stand out in a crowded job market. By using our platform to create a more polished and detailed profile, you can make a strong impression on potential employers and increase your chances of getting hired. Don't settle for being just another applicant - upgrade to our premium version and get ahead of the competition."
          />
        </div>
        <div>
          <button className={styles.prices_btn}>See Price Plan</button>
        </div>
      </section>
    </div>
  );
}
