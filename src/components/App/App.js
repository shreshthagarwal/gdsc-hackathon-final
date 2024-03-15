import React, { Component } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Front from "../Front/Front.js";
import Page from "../Page/Page.js";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sections: []
    };
  }

  componentDidMount() {
    this.setState({
      sections: [
        {
          sectionName: "About this hackathon",
          subtitle: ""
        },
        {
          sectionName: "Past Events",
          subTitle: ""
        },
        {
          sectionName: "Themes",
          subtitle: ""
        },
        {
          sectionName: "Sponsors",
          subtitle: ""
        },
        {
          sectionName: "Partners",
          subtitle: ""
        },
        {
          sectionName: "FAQ",
          subtitle: ""
        },
        {
          sectionName: "Our Team",
          subtitle: ""
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Front />
        <Page section={this.state.sections} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
