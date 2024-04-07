import { Button } from "bootstrap";
import React from "react";
import welcomeImg from '../../Assets/welcomeImage.png'

function IntroSection({buttonClicked}) {
  return (
    <section className="introSection">
      <h1 className="">Task Flow</h1>
      <div className="welcomeDiv">
        <img className="welcomeImg" 
        src={welcomeImg}
         alt="welcomeImage"></img>
      </div>n
      <div className="description">
        <h2> Simplify your Tasks, Get Started Today . . . </h2>
      </div>

      <div className="d-grid col-4 mx-auto">
         <button type="button" className=" btn btn-danger btn-lg" onClick={buttonClicked}>Lets Go</button>
      </div>

    </section>
  );
}

export default IntroSection;
