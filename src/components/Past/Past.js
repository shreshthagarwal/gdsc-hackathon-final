import React, { Component } from "react";
import "./Past.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdTablet } from "react-icons/md";

class Past extends Component {
  render() {
    return (
      <>
        <div className="Past" id="Past">
          <div className="ui centered grid">
            <div className="Row">
              <div className="Timeline">
                <VerticalTimeline lineColor={"#7D4CDA"} lineWidth={"50px"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{ borderRight: "7px solid white" }}
                    iconStyle={{ background: "#2E0085", color: "beige" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Event 1 Details
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <button className="btn1">Event Link →</button>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">Event 2</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <a href="https://2018.uottahack.ca/" target="_blank">
                        <button className="btn1">Event Link →</button>
                      </a>
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">Event 3</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <a href="https://2018.uottahack.ca/" target="_blank">
                        <button className="btn1">Event Link →</button>
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">Event 4</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <a href="https://2018.uottahack.ca/" target="_blank">
                        <button className="btn1">Event Link →</button>
                      </a>
                    </div>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">Event 5</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <a href="https://2018.uottahack.ca/" target="_blank">
                        <button className="btn1">Event Link →</button>
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdTablet />}
                  >
                    <h3 className="vertical-timeline-element-title">Event 6</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Topic
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi diam justo, ornare quis nisi elementum, interdum
                      convallis urna. Phasellus lobortis ante sed tortor rhoncus
                      dapibus.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <a href="https://2018.uottahack.ca/" target="_blank">
                        <button className="btn1">Event Link →</button>
                      </a>
                    </div>
                  </VerticalTimelineElement>

                  {/* Repeat the pattern for other years and hackathons */}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Past;
