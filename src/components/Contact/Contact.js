import React, { Component } from "react";
import "./Contact.css";
import { Button } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam justo, ornare quis nisi elementum, interdum convallis urna. Phasellus lobortis ante sed tortor rhoncus dapibus.
        </p>

        <div className="buttons">
          <h3>Neque porro quisquam est qui dolorem ipsum quia</h3>
          <Button animated size="large">
            <Button.Content visible>
              Question 1{" "}
            </Button.Content>
            <Button.Content hidden>Answer 1</Button.Content>
          </Button>

          <h3>Neque porro quisquam est qui dolorem ipsum quia</h3>
          <Button animated size="large">
            <Button.Content visible>
              Question 2{" "}
            </Button.Content>
            <Button.Content hidden>Answer 2</Button.Content>
          </Button>

          <h3>Neque porro quisquam est qui dolorem ipsum quia</h3>
          <Button animated size="large">
            <Button.Content visible>
              Question 3{" "}
            </Button.Content>
            <Button.Content hidden>Answer 3</Button.Content>
          </Button>

          <h3>Neque porro quisquam est qui dolorem ipsum quia</h3>
          <Button animated size="large">
            <Button.Content visible>
              Question 4{" "}
            </Button.Content>
            <Button.Content hidden>Answer 4</Button.Content>
          </Button>





        </div>
      </div>
    );
  }
}

export default Contact;
