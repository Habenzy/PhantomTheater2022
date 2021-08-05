import React from "react";
import { Button } from "react-bootstrap";

function SingleSponsor(props) {
  return (
    <div>
      <div>
        <h4 style={{ color: "white" }}>
          <Button
            className="mr-4"
            onClick={() => {
              props.deleteThisSponsor(props.id);
              console.log(props.id);
            }}
          >
            Delete
          </Button>
          {props.sponsor}
        </h4>
      </div>
    </div>
  );
}

export default SingleSponsor;
