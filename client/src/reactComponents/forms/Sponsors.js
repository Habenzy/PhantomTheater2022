import React, { useState } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";
// here we need way of handling user input
// crud functions:
// read all sponsors from db and map over them to display
// button to add sponsors to db
// delete function to remove

function Sponsors() {
  let [sponsor, setSponsor] = useState("");

  async function addSponsor(e) {
    e.preventDefault();
    let sponsorAdded = {
      sponsor: sponsor,
    };
    firestore.collection("sponsors").doc().set(sponsorAdded);
  }

  return (
    <div>
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh", maxWidth: "420px" }}
      >
        <Card>
          <Card.Body>
            <Form onSubmit={addSponsor}>
              <Form.Group id="sponsorAdd">
                <Form.Label>Sponsor to add:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setSponsor(e.target.value)}
                />
              </Form.Group>
              <Button id="submit_button" className="w-100" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Sponsors;
