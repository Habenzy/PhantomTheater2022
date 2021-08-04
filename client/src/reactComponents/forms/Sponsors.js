import React, { useState, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";

// here we need way of handling user input
// crud functions:
// read all sponsors from db and map over them to display
// button to add sponsors to db
// delete function to remove

function Sponsors() {
  let [sponsor, setSponsor] = useState("");
  let [sponsorList, setSponsorList] = useState([]);

  // get sponsors from DB
  async function getSponsors() {
    const sponsorRef = firestore.collection("sponsors");
    const sponsorSnapshot = await sponsorRef.get();
    const sponsorArray = sponsorSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    setSponsorList(sponsorArray);
  }

  // get sponsors on page load
  useEffect(() => {
    getSponsors();
  }, []);

  // function for adding a sponsor
  async function addSponsor(e) {
    e.preventDefault();
    let sponsorAdded = {
      sponsor: sponsor,
    };
    firestore.collection("sponsors").doc().set(sponsorAdded);
    alert("Sponsor has been added");
  }

  return (
    <div>
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh", maxWidth: "420px" }}
      >
        <Card className="w-100">
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
            <ul>
              {!sponsorList ? (
                <h3 style={{ color: "white" }}>Loading Sponsors</h3>
              ) : (
                sponsorList.map((doc) => {
                  return (
                    <li key={doc.id} style={{ color: "white" }}>
                      {doc.sponsor}
                    </li>
                  );
                })
              )}
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Sponsors;
