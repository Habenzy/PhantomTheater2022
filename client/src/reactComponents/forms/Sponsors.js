import React, { useState, useEffect } from "react";
import { Card, Form, Button, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";
import SingleSponsor from "./SingleSponsor";

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
    e.target.sponsorField.value = "";
    alert("Sponsor has been added");
    getSponsors();
  }

  // function for deleting a sponsor
  async function deleteSponsor(id) {
    await firestore.doc(`sponsors/${id}`).delete();
    console.log(id);
    console.log("delete function fired");
    getSponsors();
  }

  return (
    <div>
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh", maxWidth: "420px", minWidth: "75vw" }}
      >
        <Card className="w-100">
          <Card.Body>
            <Form onSubmit={addSponsor}>
              <Form.Group id="sponsorAdd">
                <Form.Label>Sponsor to add:</Form.Label>
                <Form.Control
                  name="sponsorField"
                  type="text"
                  onBlur={(e) => setSponsor(e.target.value)}
                  // onChange={(e) => setSponsor(e.target.value)}
                />
              </Form.Group>
              <Button id="submit_button" className="w-100 mb-5" type="submit">
                Submit
              </Button>
            </Form>
            <ul>
              {!sponsorList ? (
                <h3 style={{ color: "white" }}>Loading Sponsors</h3>
              ) : (
                sponsorList.map((doc) => {
                  return (
                    <SingleSponsor
                      key={doc.id}
                      deleteThisSponsor={deleteSponsor}
                      id={doc.id}
                      sponsor={doc.sponsor}
                    />
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
