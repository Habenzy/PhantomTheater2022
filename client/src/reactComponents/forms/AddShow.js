import React, { useState } from "react";
import app, { firestore } from "../firebase/firebase";
import { Form, Button, Card, Container } from "react-bootstrap";
// import { storage } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import "../formcss/addShow.css";

function AdminForm() {
  // create state for show information
  const history = useHistory();
  let [title, setTitle] = useState("");
  let [blurb, setBlurb] = useState("");
  let [type, setType] = useState("");
  let [status] = useState("Booked");
  let [dates, setDates] = useState([]); // creates array of dates/times
  // create state for each artist field
  let [artist, setArtist] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [description, setDescription] = useState("");
  let [video1, setVideo1] = useState("");
  let [link1, setLink1] = useState("");
  let [link2, setLink2] = useState("");
  //image variables
  let [imageLg, setImageLg] = useState("");
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [imageLgFile, setimageLgFile] = useState("");
  let [image1File, setImage1File] = useState("");
  let [image2File, setImage2File] = useState("");
  let [image3File, setImage3File] = useState("");

  // construct object from state to pass to db
  let show = {
    title: title,
    type: type,
    blurb: blurb,
    status: status,
    dates: dates,
    artist: artist,
    contactName: contactName,
    phone: phone,
    email: email,
    bio: bio,
    description: description,
    imageLg: imageLg,
    image1: image1,
    image2: image2,
    image3: image3,
    video1: video1,
    link1: link1,
    link2: link2,
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

      //form clearing functions need testing
      // clear form inputs
      event.target.titleIn.value = "";
      event.target.blurbIn.value = "";
      event.target.typeIn.value = "";
      event.target.showDescriptionInput.value = "";
      event.target.artistInput.value = "";
      event.target.contactNameInput.value = "";
      event.target.phoneInput.value = "";
      event.target.emailInput.value = "";
      event.target.bioInput.value = "";
      event.target.image1Input.value = "";
      event.target.image2Input.value = "";
      event.target.image3Input.value = "";
      event.target.video1Input.value = "";
      event.target.link1Input.value = "";
      event.target.link2Input.value = "";
      event.target.imageLgIn.value = "";
      //success message & reroute
      alert("Show has been added!");
      history.push("/adminDash");

      // clear state - is clearing state and clearing form fields (above) both necessary? test & refactor
      setTitle("");
      setType("");
      setBlurb("");
      setImageLg("");
      setArtist("");
      setContactName("");
      setPhone("");
      setEmail("");
      setBio("");
      setDescription("");
      setImage1("");
      setImage2("");
      setImage3("");
      setVideo1("");
      setLink1("");
      setLink2("");
    }
  }

  //---------------------------image handling-----------------------------------//
  //is handleChange fxn necessary? - test

  //imageLg or splash image
  const handleChange = (event) => {
    if (event.target.files[0]) {
      setimageLgFile(event.target.files[0]);
    } handleUpload(event)
  };

  const handleUpload = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let largeRef = storageRef.child(`/images/${imageLgFile.name}`);

    largeRef.put(imageLgFile).then((snapshot) => {
      largeRef.getDownloadURL().then((url) => {
        setImageLg(url);
        console.log(url);
      });
    });
  };

  //image1
  const handleChange1 = (event) => {
    if (event.target.files[0]) {
      setImage1File(event.target.files[0]);
    } handleUpload1(event)
  };

  const handleUpload1 = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let imgOneRef = storageRef.child(`/images/${image1File.name}`);

    imgOneRef.put(image1File).then((snapshot) => {
      imgOneRef.getDownloadURL().then((url) => {
        setImage1(url);
        console.log(url);
      });
    });
  };

  //image2
  const handleChange2 = (event) => {
    if (event.target.files[0]) {
      setImage2File(event.target.files[0]);
    } handleUpload2(event)
  };

  const handleUpload2 = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let imgTwoRef = storageRef.child(`/images/${image2File.name}`);

    imgTwoRef.put(image2File).then((snapshot) => {
      imgTwoRef.getDownloadURL().then((url) => {
        setImage2(url);
        console.log(url);
      });
    });
  };

  //image3
  const handleChange3 = (event) => {
    if (event.target.files[0]) {
      setImage3File(event.target.files[0]);
    } handleUpload3(event)
  };

  const handleUpload3 = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let imgThreeRef = storageRef.child(`/images/${image3File.name}`);

    imgThreeRef.put(image3File).then((snapshot) => {
      imgThreeRef.getDownloadURL().then((url) => {
        setImage3(url);
        console.log(url);
      });
    });
  };
  //---------------------------------------------------------------------------//

  // form sets state on input change and fires enterNewShow on submit
  return (
    <div className="add_show">
      {/* Add show container */}
      <Container
        id="container_add"
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "840px" }}>
          <Card>
            {/* Start Of the First Column Card */}
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
                  <h2 className="text-center mb-2">Add A Show:</h2>
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
                    <Form.Control
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
                  {/*Container To choose a image */}
                  {/* Choose a large image */}
                  <Form.Group>
                    <Form.Label>Image (large) / Splash Image:</Form.Label>
                    <Form.Control
                      // id="file_button"
                      type="file"
                      name="imageLgIn"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {/* Image 1 Container */}
                  <Form.Group>
                    <Form.Label>Image 1:</Form.Label>
                    <Form.Control
                      // id='file_button'
                      type="file"
                      name="image1Input"
                      onChange={handleChange1}
                    />
                  </Form.Group>
                  {/* End of Image 1 Container */}
                  {/* Image 2 Container */}
                  <Form.Group>
                    <Form.Label>Image 2:</Form.Label>
                    <Form.Control
                      // id='file_button'
                      type="file"
                      name="image2Input"
                      onChange={handleChange2}
                    />
                  </Form.Group>
                  {/* End Of image 2 container */}
                  {/* Image 3 Container */}
                  <Form.Group>
                    <Form.Label>Image 3:</Form.Label>
                    <Form.Control
                      // id='file_button'
                      type="file"
                      name="image3Input"
                      onChange={handleChange3}
                    />
                  </Form.Group>
                  {/* End of Image 3 container */}
                  {/* Video link container */}
                  <Form.Group>
                    <Form.Label>Video:</Form.Label>
                    <Form.Control
                      type="text"
                      name="video1Input"
                      onChange={(evt) => setVideo1(evt.target.value)}
                      style={{ width: 400 }}
                    />
                  </Form.Group>
                  {/* Link 1 field containeer */}
                  <Form.Group>
                    <Form.Label>Link 1: </Form.Label>
                    <Form.Control
                      type="text"
                      name="link1Input"
                      placeholder="Enter Link"
                      onChange={(evt) => setLink1(evt.target.value)}
                      style={{ width: 400 }}
                    />
                  </Form.Group>
                  {/* End of field 1 */}
                  {/*link 2 container */}
                  <Form.Group>
                    <Form.Label>Link 2:</Form.Label>
                    <Form.Control
                      type="text"
                      name="link2Input"
                      placeholder="Enter Link"
                      onChange={(evt) => setLink2(evt.target.value)}
                      style={{ width: 400 }}
                    />
                  </Form.Group>
                </Card.Body>

                {/* START OF Second Card Body */}
                <Card.Body>
                  <br />
                  <br />
                  <br />
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
                      type="text"
                      name="emailInput"
                      placeholder="Enter Email"
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of email container */}
                  {/* Artist Bio container */}
                  <Form.Group>
                    <Form.Label>Artist Bio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="bioInput"
                      placeholder="Enter Artist Bio"
                      onChange={(evt) => setBio(evt.target.value)}
                    />
                  </Form.Group>
                  {/* End of Artist Bio container */}
                  {/* Show Description Container */}
                  <Form.Group>
                    <Form.Label for="showDescription">
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
                </Card.Body>
                {/* End of Second Card Body */}

                <Button id="add_submit" className="w-100" type="submit">
                  Submit
                </Button>
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
