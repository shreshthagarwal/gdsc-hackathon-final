// About.js

import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="About" id="About">
          <p>
            We cordially invite your students to participate in the In-Person –
            Global Hackathon, a 24-hour event called CodeClash , which will be
            held on the 19th of April at Bharati Vidhyapeeth’s College of
            Engineering. We are expecting active participation of near and about
            80+ teams to develop and compete for innovative solutions across
            diverse themes like Healthcare, Fintech & E-commerce, Smart
            Education, Sustainability & Development, Open Innovation.
          </p>

          <p>
            The hackathon thrummed with the energy of passionate participants,
            each eager to bring their boldest ideas to life. In this
            electrifying atmosphere, participants were fueled not only by their
            ambition to create but also by the array of facilities and support
            at their fingertips.
          </p>

          <h3>What participants can expect from this event:</h3>
          <p>
            1. Distinguished mentors provide guidance to participants, enabling
            them to learn valuable problem-solving skills.{" "}
          </p>
          <p>
            {" "}
            2. Engaging activities, delicious food, and intellectual stimulation
            throughout the event. We are also providing additional perks for the
            participants:
          </p>

          <h3>Free Food:</h3>
          <p>
            All Hackathon participants enjoy free meals and snacks throughout
            the event. Keep your energy high and your creativity flowing. Stay
            fueled and focused - your dream project awaits!
          </p>

          <h3>Goodies for Runner up:</h3>
          <p>
            Just for being part of Hackathon, everyone gets free goodies. It’s
            our way of saying thanks for being with us.{" "}
          </p>

          <h3>Certificates For All Participants and Winners :</h3>
          <p>
            Not only do you get cool stuff, but every participant also gets a
            certificate. Plus, the winning team gets a special certificate for
            their awesome achievement!{" "}
          </p>

          <h3>Fun and surprise gifts:</h3>
          <p>
            Participants can anticipate exciting surprises and gifts throughout
            the event, adding an element of fun and anticipation to their
            hacking experience.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default About;
