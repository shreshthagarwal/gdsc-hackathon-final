import React, { Component } from "react";
import "./Event.css";
import { Card } from "semantic-ui-react";
import theme1 from "../../images/theme1.png";
import theme2 from "../../images/theme2.png";
import theme3 from "../../images/theme3.png";
import theme4 from "../../images/theme4.png";
import theme5 from "../../images/theme5.png";
import theme6 from "../../images/theme6.png";
import theme7 from "../../images/theme7.png";
import theme8 from "../../images/theme8.png";

class Event extends Component {
  handleClick(link) {
    window.location.href = link;
  }

  render() {
    // Array of card data
    const cardsData = [
      {
        title: "HealthTech for Mental Well-being",
        text: "",
        link: "#",
        discount: "10%",
        imageUrl: theme1
      },
      {
        title: "Augmented Reality for Education",
        text: "",
        link: "#",
        discount: "20%",
        imageUrl: theme2
      },
      {
        title: "Community-driven Solutions",
        text: "",
        link: "#",
        discount: "30%",
        imageUrl: theme3
      },
      {
        title: "AI-Powered Accessibility Tools",
        text: "",
        link: "#",
        discount: "40%",
        imageUrl: theme4
      },
      {
        title: "Blockchain for Social Impact",
        text: "",
        link: "#",
        discount: "50%",
        imageUrl: theme5
      },
      {
        title: "Cybersecurity Challenges",
        text: "",
        link: "#",
        discount: "60%",
        imageUrl: theme6
      },
      {
        title: "IoT for Smart Cities",
        text: "",
        link: "#",
        discount: "70%",
        imageUrl: theme7
      },
      {
        title: "Gaming for Education",
        text: "",
        link: "#",
        discount: "80%",
        imageUrl: theme8
      }
    ];

    return (
      <div className="Event" id="Events">
        <div className="ui centered grid">
          <div className="row" id="cardRow">
            {cardsData.map((card, index) => (
              <div className="card-hover" key={index}>
                <div className="card-hover__content">
                  <h3 className="card-hover__title">{card.title}</h3>
                  <p className="card-hover__text">{card.text}</p>
                  <a href={card.link} className="card-hover__link">
                    <span>Learn How</span>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
                <div className="card-hover__extra">
                  <h4>Learn now and get {card.discount} discount!</h4>
                </div>
                <div className="themepic1">
                  <img src={card.imageUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
