import { Button } from "bootstrap";
import React from "react";

function IntroSection({buttonClicked}) {
  return (
    <section className="introSection">
      <h1 className="">Task Flow</h1>
      <div className="divd">
        <img className="welcomeImg" 
        src="https://img.freepik.com/free-vector/creative-welcome-team-banner-your-recruitment-process_1017-50446.jpg?size=626&ext=jpg&ga=GA1.1.521510461.1697829523&semt=sph"
         alt="welcomeImage"></img>
      </div>
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
