import React from "react";
import LadyTyping from "../../assets/pexels-photo-80911801.webp";
import style from "./Blog.module.css";
import BlogPointCard from "../../components/BlogPointCard/BlogPointCard";

export default function Blog() {
  return (
    <div className={style.blog_page}>
      <h1 className={style.header} style={{ fontSize: "3em" }}>
        How to land your remote jobs
      </h1>
      <main className={style.blog_main}>
        <section className={style.blog_left}>
          <h3 id={style.tips_header}>
            8 concise tips to help you land international remote jobs
          </h3>
          <img
            id={style.main_img}
            src={LadyTyping}
            alt="A young black woman typing on a laptop"
          />
          <div id={style.main_img_labels}>
            <span>Posted Wed, May 4 2023</span>
            <span>2 min read</span>
          </div>
          <p className={style.main_text}>
            <strong>
              Remote work has created global job opportunities for Nigerians
              seeking international positions.&nbsp;
            </strong>
            <span style={{ color: "#7A7A7A" }}>
              Here are concise tips to help you land international remote jobs.
              In today's digital age, the concept of work has evolved, opening
              up exciting possibilities for professionals to embrace remote job
              opportunities. Whether you seek a flexible lifestyle, a better
              work-life balance, or the chance to work with global teams,
              landing a remote job can be a game-changer. In this introductory
              article, we will explore effective strategies and valuable tips to
              help you navigate the path towards securing your dream remote job.
            </span>
          </p>
          <ul className={style.blog_points}>
            <BlogPointCard
              number={1}
              header="ENHANCE SKILLS AND EDUCATION"
              text="Develop relevant skills and education to meet international job market demands. Stay updated and pursue certifications or further education."
            />
            <BlogPointCard
              number={2}
              header="RESEARCH REMOTE-FRIENDLY COMPANIES"
              text="Look for companies that have a remote-friendly or distributed workforce culture. Research their values, work policies, and remote job opportunities."
            />
            <BlogPointCard
              number={3}
              header="BUILD A STRONG ONLINE PRESENCE"
              text="Create a professional online presence, focusing on a well-designed LinkedIn profile. Engage in industry discussions and network with professionals."
            />
            <BlogPointCard
              number={4}
              header="TAILOR YOUR RESUME/CV AND COVER LETTER"
              text="Customize your application materials to emphasize remote work capabilities, independence, time management, and cross-cultural communication skills."
            />
            <BlogPointCard
              number={5}
              header="NETWORK AND SEEK REFERRALS"
              text="Connect with professionals locally and internationally, actively participating in discussions and seeking referrals for remote job openings."
            />
          </ul>
        </section>
        <section className={style.blog_right}></section>
      </main>
    </div>
  );
}
