import React, { Component } from "react";
import "./Contact.css";
import { Button } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <p />

        <div className="buttons">
          <h3> </h3>
          <Button primary animated size="large">
            <Button.Content visible>
              How many members are allowed in the team?{" "}
            </Button.Content>
            <Button.Content hidden>1-4 members</Button.Content>
          </Button>

          <h3 />
          <Button secondary animated size="large">
            <Button.Content visible>
              Is there a registration fee for this hackathon{" "}
            </Button.Content>
            <Button.Content hidden>
              No, this hackathon is open to all for free
            </Button.Content>
          </Button>

          <h3> </h3>
          <Button animated size="large" className="third">
            <Button.Content visible>
              Is it required for all the members of my team to be from the same
              college{" "}
            </Button.Content>
            <Button.Content hidden>
              No, the participants of a team can be from different colleges.
            </Button.Content>
          </Button>

          <h3> </h3>
          <Button animated size="large" className="fourth">
            <Button.Content visible>
              Will the hackathon be online or offline{" "}
            </Button.Content>
            <Button.Content hidden>
              The hackathon will be offline{" "}
            </Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
