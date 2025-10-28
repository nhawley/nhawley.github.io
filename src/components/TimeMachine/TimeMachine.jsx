import React, { useState } from "react";
import "./TimeMachine.css";

const items = [
  {
    year: "2016",
    title: "Started Learning Development",
    main: "Rutgers Coding Bootcamp", 
    desc: "At Rutgers coding bootcamp I began exploring HTML, CSS, and JavaScript while building my first personal sites. React quickly became my preferred framework. I was a TA for the next cohort."
  },
    {
    year: "2017",
    title: "Jr. Web Developer",
    main: "Websignia", 
    desc: "Post bootcamp I started web development at Websignia, While there I explored Wordpress and PHP. I focused on how to place modern Jaavascript solutions in older codebases. I learned how to build production websites there."
  },
    {
    year: "2018",
    title: "Freelance Web & Mobile Developer",
    main: "Disrupt / Freelance", 
    desc: "I built on my web knowledge and interest in mobile apps to develop several React Native MVPs for clients. I worked with a small team of designers and developers to make ideas launch ready."
  },
    {
    year: "2019",
    title: "Full-Stack Web Developer",
    main: "Mediacutlet", 
    desc: "After freelancing I moved on to Mediacutlet. While there I improved my javascript skills and help small to medium sized businesses in NJ launch modern landing pages."
  },
    {
    year: "2020",
    title: "Mid-Level Full-Stack Web Developer",
    main: "Local Wisdom", 
    desc: "At Local Wisdom, I worked with another team of designers and developers to modernize a new web layout for Caris Life Sciences. Perfromance and accessibility were crucial here which helped me improve my vanilla JS skills and explore testing."
  },
    {
    year: "2021",
    title: "QA Engineer",
    main: "Volo Sports", 
    desc: "At Volo Sports, I spearheaded their first automated test suites to cut down on dev cycles. While there I learned Cypress and how to write e2e tests with gherkin documentation."
  },
  {
    year: "2022",
    title: "QA Automation Engineer",
    main: "Masterworks", 
    desc: "My first year at Masterworks I spearheaded test suites for their main web app. I also created test case spreadsheets and began manual testing their mobile app."
  },
  {
    year: "2023",
    title: "QA Lead",
    main: "Masterworks", 
    desc: "In my second year at Masterworks I split my time between both web and mobile teams where I was the sole QA. I would fix small probelems on both the website and mobile apps."
  },
  {
    year: "2024",
    title: "Software Developer in Test (SDET)",
    main: "Masterworks", 
    desc: "In my third year at Masterworks I fully joined the mobile team and lead the refactor of the app to modern React Native standards. I also became in charge of managing the app on each respective store (App Store & Google Play). We reduced the peak crash rate of the app by 15%."
  },
  {
    year: "2025",
    title: "Mobile SDET (React Native)",
    main: "Masterworks / Building", 
    desc: "In my last year at Masterworks I continued progress on refactoring the mobile app. I'm currently a free agent, building several personal project apps and prepping for senior developer or testing roles. Let's work!"
  }
];

export default function ExperienceTimeline() {
  const [index, setIndex] = useState(0);
  const selected = items[index];

  const goPrev = () => setIndex((idx) => (idx - 1 + items.length) % items.length);
  const goNext = () => setIndex((idx) => (idx + 1) % items.length);

  const progressPercent = (index / (items.length - 1)) * 100;

  return (
    <section className="timeline-wrapper">
      <div key={selected.year} className="text-animate">
        <h3 className="timeline-location">{selected.year}</h3>
        <h3 className="timeline-title">{selected.title}</h3>
        <h2 className="timeline-location">{selected.main}</h2>
        <p className="timeline-desc">{selected.desc}</p>
        {/* <div className="project-card-placeholder">
          Preview goes here
        </div> */}
      </div>

      <div className="timeline-bar">
        <div
          className="timeline-progress"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Desktop clickable years */}
      <div className="timeline-scroll desktop">
        {items.map((item, i) => (
          <button
            key={i}
            className={`timeline-item ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <span className="year">{item.year}</span>
          </button>
        ))}
      </div>

      {/* Mobile navigation arrows */}
      <div className="mobile-arrows mobile">
        <button className="arrow left" onClick={goPrev}>◀</button>
        <span className="mobile-year">{selected.year}</span>
        <button className="arrow right" onClick={goNext}>▶</button>
      </div>
    </section>
  );
}
