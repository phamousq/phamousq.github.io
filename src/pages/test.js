"use strict";
import React from "react";
import { Button } from "@material-ui/core";

class Test extends React.Component {
  clicked() {
    // console.log("the button was clicked");
    window.open("mailto:someone@yoursite.com");
  }
  render() {
    return (
      <div>
        hello
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            this.clicked();
          }}
        >
          Primary
        </Button>
      </div>
    );
  }
}
export { Test as default };
