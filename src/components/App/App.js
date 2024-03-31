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
          sectionName: "Timeline",
          subTitle: ""
        },
        {
          sectionName: "Themes",
          subtitle: ""
        },
        // {
        //   sectionName: "Sponsors",
        //   subtitle: ""
        // },
        {
          sectionName: "Team",
          subtitle: ""
        },
        {
          sectionName: "FAQ",
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
