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
                      Ideathon
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: 10-10:30 am to 2 pm
                    </h4>
                    <p className="paragraph-text">
                      Participants brainstorm and pitch ideas. Ideas pitched to
                      judges/community.
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
                    <h3 className="vertical-timeline-element-title">
                      Mentorship Round
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: 2-3 pm
                    </h4>
                    <p className="paragraph-text">
                      Mentorship sessions provided for refinement and idea
                      development.
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
                    <h3 className="vertical-timeline-element-title">
                      PPT and Structured Model round
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: 3 pm to 6 pm
                    </h4>
                    <p className="paragraph-text">
                      Teams develop prototypes. Presentations and judging based
                      on novelty, functionality, feasibility.
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
                    <h3 className="vertical-timeline-element-title">
                      Judging Round
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: 6-7 pm
                    </h4>
                    <p className="paragraph-text">
                      Judges select promising ideas.
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
                    <h3 className="vertical-timeline-element-title">
                      Final presentation and Project round
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: till 3 pm
                    </h4>
                    <p className="paragraph-text">
                      Project introduction and problem statement. Solution
                      description and technical implementation. Future plans and
                      impact discussed.
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
                    <h3 className="vertical-timeline-element-title">
                      Final Judgment Round
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Time: 3-4 pm
                    </h4>
                    <p className="paragraph-text">
                      Only the Projects with most feasible solutions and
                      implementations are selected, based on the Judges and
                      Organising Team.
                    </p>
                    <div className="circle" />
                    <div className="logobutton2">
                      <button className="btn1">Event Link →</button>
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
