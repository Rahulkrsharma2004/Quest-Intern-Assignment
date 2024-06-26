import React from "react";
import "../style/Dynamic.css";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import img1 from "../assets/img1.PNG";
const Dynamic = () => {
  return (
    <>
      <section className="dynamicSection">
        <div className="dynamicSectionP">
          <p>Dynamic & Intelligent experiences</p>
          <br />
          <br />
          <h2>
            Deliver Delightful In-App Experiences that drive Adoption,
            Engagement & Retention
          </h2>
          <br />
          <br />
          <p>50+ Pre-Built In-app Components to get started within minutes</p>
        </div>
        <div className="dynamicSectionAnimation">
          <div className="QuizzesDiv">
            <h3>Onboarding</h3>
            <h3>Quizzes</h3>
            <h3>Challenges</h3>
            <h3>Offers</h3>
            <h3>Survey</h3>
            <h3>Personalized UI</h3>
          </div>
          <div className="QuizzesDivImg">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="">
            
        </div>
      </section>
    </>
  );
};

export default Dynamic;
