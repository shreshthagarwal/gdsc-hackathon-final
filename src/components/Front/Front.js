import React, { useState, useEffect } from "react";
import "./Front.css";
import Group52Image from '../../images/Group 52.png';
// import { motion } from "framer-motion"; // Import motion from framer-motion

import TextLogo from "../../images/uottahack19.png";
import BarbarianInfoImage from "../../images/Barbarian_info.png"; // Update the import path

import Egg from "../Egg/Egg.js";

const Front = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    // Calculate the time left here
    // You can replace the following dummy values with the actual end date and time of your hackathon
    const endDate = new Date("2024-03-31T23:59:59"); // Replace with the actual end date
    const now = new Date();

    const difference = endDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="Front">
      <div className="Hero">
        <div className="">
          <div className="Barbicon">
            <img src={BarbarianInfoImage} alt="Barbarian Info" />
          </div>

          

          {/* <img className="TextLogo" src={TextLogo} alt="" /> */}
        </div>
        <div className="HeroText">
          <div className="timer">
            <div className="timer-box">
              <p className="timer-value1">{timeLeft.days}</p>
              <p className="timer-label">Days</p>
            </div>
            <div className="timer-box">
              <p className="timer-value2">{timeLeft.hours}</p>
              <p className="timer-label ">Hours</p>
            </div>
            <div className="timer-box">
              <p className="timer-value3">{timeLeft.minutes}</p>
              <p className="timer-label">Minutes</p>
            </div>
            <div className="timer-box">
              <p className="timer-value4">{timeLeft.seconds}</p>
              <p className="timer-label">Seconds</p>
            </div>
          </div>
        </div>

        <div className="logobutton">
          <a href="https://2024.uottahack.ca/" target="_blank">
            <button className="btn reg">Register Here →</button>
          </a>
        </div>
        <Egg />
      </div>
    </div>
  );
};

export default Front;
