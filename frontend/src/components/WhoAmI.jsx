import React from "react";
import "./WhoAmI.css";
import profileImage from "./assets/profile.jpeg";

const WhoAmI = () => {
  return (
    <div className="whoami-container">
      <div className="whoami-card">
        <img src={profileImage} alt="Irem's Profile" className="profile-image" />
        <div className="whoami-text">
          <h2>Who Am I?</h2>
          <p>
            Hello everyone, I'm Irem. I'm a computer engineer. I've always wanted
            to create a website like this, and yes, I did! In addition to my work,
            I'm eager to share information about the countries and cities I've visited
            and the foods I've eaten. I love exploring new cities and visiting museums.
            I breathe in the breath of cities and capture these moments. I'll share
            my experiences on these topics with you. I look forward to your comments!
            I also enjoy cooking immensely. I'll share some of the recipes I've inherited
            from my lovely mother and some I've created myself. <br />Thanks for following me!
            <br /> Irem
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;