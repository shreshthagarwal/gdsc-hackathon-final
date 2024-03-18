import React, { Component } from "react";
import "./Organizer.css"; // Import custom CSS for the component

class Team extends Component {
  render() {
    return (
      <>
        <div className="Past" id="Past">
          <div className="ui centered grid">
            <div className="Row">
              <div className="Timeline">
                <UncontrolledExample />
              </div>
            </div>
            <div className="Row">
              <div className="Timeline">
                <UncontrolledExample />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function UncontrolledExample() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD4sXnSRh-nrILXPegixpxzoRijqz_t19nKFEgeCRUA&s"
            alt=""
            style={{ height: "450px", width: "750px" }}
          />
        </div>
        <div className="slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IHo9Q3QCBSD9x_FkWTWns81V41u8AAoZp7Up4Gsjow&s"
            alt=""
            style={{ height: "450px", width: "750px" }}
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            alt=""
            style={{ height: "450px", width: "750px" }}
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            alt=""
            style={{ height: "450px", width: "750px" }}
          />
        </div>
        <div className="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            alt=""
            style={{ height: "450px", width: "750px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
