import { useState } from "react";
import { firestore } from "../firebase/firebase";
import { Form, Button, Card, Container } from "react-bootstrap";
import NumberFormat from "react-number-format";
import "../formcss/addShow.css";
import "./Dashboard.jsx"
import splashPlaceholder from "../images/testpattern.gif"

function AdminForm(props) {
  // create state for show information

  let [title, setTitle] = useState("");
  let [blurb, setBlurb] = useState("");
  let [type, setType] = useState("");
  let [status] = useState("Proposal");
  // let [dates] = useState([])

  // create state for each artist field
  let [artist, setArtist] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [description, setDescription] = useState("");
  let [splashImage] = useState(splashPlaceholder)


  // construct object from state to pass to db
  let show = {
    title: title,
    type: type,
    blurb: blurb,
    status: status,
    // dates: dates,

    artist: artist,
    contactName: contactName,
    phone: phone,
    email: email,
    bio: bio,
    description: description,
    splashImage: splashImage,
  };

  // write current state to shows collection
  async function enterNewShow(event) {
    event.preventDefault();
    // get the collection 'shows' | .doc creates new entry with auto ID | .set(show) fills new entry with show object built from state values set by form
    if (!event.target.titleIn.value) {
      alert("please enter a show.");
    } else {
      // write show data to db
      await firestore.collection("shows").doc().set(show);
      //for testing
      console.log("show added: ", show);

      //success message & reroute
      alert("Show has been added!");


      // clear state - is clearing state and clearing form fields (above) both necessary? test & refactor
      setTitle("");
      setType("");
      setBlurb("");
      setArtist("");
      setContactName("");
      setPhone("");
      setEmail("");
      setBio("");
      setDescription("");

      props.editProposal()

    }
  }


  //---------------------------------------------------------------------------//

  // form sets state on input change and fires enterNewShow on submit
  return (

    <div className="add_show">

      {/* Add show container */}
      <Container
        id="container_add"
        className="d-flex align-items center justify-content-center"
      >
        <div className="w-100">
          <Card>

            {/* Start of the form Container. */}
            <Form
              id="adminForm"
              onSubmit={enterNewShow}
              type="submit"
              value="submit"
            >
              <div id="form" className="d-flex flex-direction row">
                {/* Add Show section  */}
                <Card.Body>
                  <h3 className="text-center mb-2">Add A Show:</h3>
                  <br />
                  {/* Insert Show Title */}
                  <Form.Group>
                    <Form.Label>Show Title:</Form.Label>
                    <Form.Control
                      type="text"
                      name="titleIn"
                      placeholder="Enter Title"
                      onChange={(evt) => setTitle(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Show Title */}
                  {/* Show Blurb Container */}
                  <Form.Group>
                    <Form.Label>Show Blurb:</Form.Label>
                    <textarea
                      className="form-control"
                      rows="3"
                      type="text"
                      name="blurbIn"
                      placeholder="Enter Blurb"
                      onChange={(evt) => setBlurb(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Blurb */}
                  {/* Insert Show Type */}
                  <Form.Group>
                    <Form.Label>Show Type:</Form.Label>
                    <Form.Control
                      type="text"
                      name="typeIn"
                      placeholder="Enter Type"
                      onChange={(evt) => setType(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Show Type */}
                  {/* Line breaks to bring the form down */}
                  {/* Container to insert Artist Name */}
                  <Form.Group>
                    <Form.Label>Artist Name: </Form.Label>
                    <Form.Control
                      type="text"
                      name="artistInput"
                      placeholder="Enter Artist Name"
                      onChange={(evt) => setArtist(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Artist Name */}
                  {/* Contact Name container */}
                  <Form.Group>
                    <Form.Label>Contact Name: </Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNameInput"
                      placeholder="Enter Contact Name"
                      onChange={(evt) => setContactName(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Contact container */}
                  {/* Phone Container */}
                  <Form.Group>
                    <Form.Label>Phone: </Form.Label>
                    <NumberFormat
                      type="text"
                      name="phoneInput"
                      placeholder="Enter Phone"
                      className="form-control"
                      format="(###) ###-####"
                      mask="_"
                      onChange={(evt) => setPhone(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of phone container */}
                  {/* Email Container */}
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailInput"
                      placeholder="Enter Email"
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of email container */}

                  {/* Artist Bio Container */}
                  <Form.Group>
                    <Form.Label>Artist Bio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="bioInput"
                      placeholder="Enter Artist Bio information"
                      onChange={(evt) => setBio(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of bio container */}

                  {/* Show Description Container */}
                  <Form.Group>
                    <Form.Label>
                      Description of the Show:
                    </Form.Label>
                    <textarea
                      className="form-control"
                      name="showDescriptionInput"
                      placeholder="Enter Show Description"
                      rows="6"
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                    {/* End of Show Description Container */}
                  </Form.Group>

                  <Button id="add_submit" className="w-100" type="submit">
                    Submit
                    </Button>
                </Card.Body>
                {/* End of Second Card Body */}

              </div>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
}

//------export the component---------
export default AdminForm;
