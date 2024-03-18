import React, { Component } from "react";
import "./Section.css";
import Event from "../Event/Event.js";
import Organizer from "../Organizer/Organizer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Sponsor from "../Sponsor/Sponsor.js";
import Partners from "../Partners/Partners.js";
import Past from "../Past/Past.js";

class Section extends Component {
  // Define a mapping of section names to colors
  sectionColors = {
    "About this hackathon": "#ea4335",
    Timeline: "#4285f4",
    Themes: "green",
    Sponsors: "orange",
    Partners: "purple",
    Team: "yellow",
    FAQ: "#ea4335",
    "Our Team": "brown"
  };

  render() {
    // Get the color for the current section name
    const color = this.sectionColors[this.props.section.sectionName] || "black";

    return (
      <div className="Section">
        {/* Apply the color dynamically to the h2 element */}
        <h2 style={{ color: color }}>{this.props.section.sectionName}</h2>
        <h3>{this.props.section.subtitle}</h3>
        {this.props.section.sectionName === "About this hackathon" && <About />}
        {this.props.section.sectionName === "Timeline" && <Past />}
        {this.props.section.sectionName === "Themes" && <Event />}
        {this.props.section.sectionName === "Sponsors" && <Sponsor />}
        {this.props.section.sectionName === "Partners" && <Partners />}
        {this.props.section.sectionName === "Team" && <Organizer />}
        {this.props.section.sectionName === "FAQ" && <Contact />}
      </div>
    );
  }
}

export default Section;
