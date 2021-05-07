import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
// import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom";
import app, { firestore } from "../firebase/firebase";
import NumberFormat from "react-number-format";
import "../formcss/artistForm.css";

let nullShow = {
  title: "title",
  type: "type",
  blurb: "blurb",
  status: "status",
  dates: [],
  artist: "artist",
  contactName: "contactName",
  phone: "phone",
  email: "email",
  bio: "bio",
  description: "description",
  imageLg: "imageLg",
  imageLgName: "imageLgName",
  image1: "image1",
  image1Name: "image1Name",
  image2: "image2",
  image2Name: "image2Name",
  image3: "image3",
  image3Name: "image3Name",
  artistWebsite: "artistWebsite",
  artistFacebook: "artistFacebook",
  artistYouTube: "artistYouTube",
  artistInstagram: "artistInstagram",
  artistSpotify: "artistSpotify",
};

export default function ArtistForm() {
  const history = useHistory();
  // create state object to hold values from database
  let [thisShow, setThisShow] = useState(nullShow);

  // create state objects to hold values from input form
  let [title, setTitle] = useState("");
  let [blurb, setBlurb] = useState("");
  let [type, setType] = useState("");
  let [status, setStatus] = useState("");
  let [dates, setDates] = useState([]);
  let [artist, setArtist] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [description, setDescription] = useState("");

  //images
  let [imageLg, setImageLg] = useState("");
  let [imageLgName, setImageLgName] = useState("");
  let [image1, setImage1] = useState("");
  let [image1Name, setImage1Name] = useState("");
  let [image2, setImage2] = useState("");
  let [image2Name, setImage2Name] = useState("");
  let [image3, setImage3] = useState("");
  let [image3Name, setImage3Name] = useState("");
  //progress bar variables
  let [progressLg, setProgressLg] = useState(0);
  let [progress1, setProgress1] = useState(0);
  let [progress2, setProgress2] = useState(0);
  let [progress3, setProgress3] = useState(0);

  //social media
  let [artistWebsite, setArtistWebsite] = useState("");
  let [artistFacebook, setArtistFacebook] = useState("");
  let [artistYouTube, setArtistYouTube] = useState("");
  let [artistInstagram, setArtistInstagram] = useState("");
  let [artistSpotify, setArtistSpotify] = useState("");

  // get document from database and set it in state
  // then populate form with state values
  async function getOneShow() {
    let id = document.location.hash.substring(1);
    const showRef = await firestore.collection("shows").doc(id);
    const showIn = await showRef.get();
    if (!showIn.exists) {
      alert("no such document", id);
    } else {
      let showInData = showIn.data();
      setThisShow(showInData);

      showInData.title ? setTitle(showInData.title) : setTitle("");
      showInData.blurb ? setBlurb(showInData.blurb) : setBlurb("");
      showInData.type ? setType(showInData.type) : setType("");
      showInData.status ? setStatus(showInData.status) : setStatus("");
      showInData.dates ? setDates(showInData.dates) : setDates([]);
      showInData.artist ? setArtist(showInData.artist) : setArtist("");
      showInData.contactName
        ? setContactName(showInData.contactName)
        : setContactName("");
      showInData.phone ? setPhone(showInData.phone) : setPhone("");
      showInData.email ? setEmail(showInData.email) : setEmail("");
      showInData.bio ? setBio(showInData.bio) : setBio("");
      showInData.description
        ? setDescription(showInData.description)
        : setDescription("");

      showInData.imageLg ? setImageLg(showInData.imageLg) : setImageLg("");
      showInData.imageLgName
        ? setImageLgName(showInData.imageLgName)
        : setImageLgName("");
      showInData.image1 ? setImage1(showInData.image1) : setImage1("");
      showInData.image1Name
        ? setImage1Name(showInData.image1Name)
        : setImage1Name("");
      showInData.image2 ? setImage2(showInData.image2) : setImage2("");
      showInData.image2Name
        ? setImage2Name(showInData.image2Name)
        : setImage2Name("");
      showInData.image3 ? setImage3(showInData.image3) : setImage3("");
      showInData.image3Name
        ? setImage3Name(showInData.image3Name)
        : setImage3Name("");

      showInData.artistWebsite
        ? setArtistWebsite(showInData.artistWebsite)
        : setArtistWebsite("");
      showInData.artistFacebook
        ? setArtistFacebook(showInData.artistFacebook)
        : setArtistFacebook("");
      showInData.artistYouTube
        ? setArtistYouTube(showInData.artistYouTube)
        : setArtistYouTube("");
      showInData.artistInstagram
        ? setArtistInstagram(showInData.artistInstagram)
        : setArtistInstagram("");
      showInData.artistSpotify
        ? setArtistSpotify(showInData.artistSpotify)
        : setArtistSpotify("");
    }
  }

  if (thisShow.title === "title") {
    getOneShow();
  }

  let id = document.location.hash.substring(1);

  //*************************************************** */

  async function enterNewArtist(event) {
    console.log("enter new artist fired");
    event.preventDefault();
    console.log("Updating...");

    let showUpdate = {
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
      imageLgName: imageLgName,
      image1: image1,
      image1Name: image1Name,
      image2: image2,
      image2Name: image2Name,
      image3: image3,
      image3Name: image3Name,
      artistWebsite: artistWebsite,
      artistFacebook: artistFacebook,
      artistYouTube: artistYouTube,
      artistInstagram: artistInstagram,
      artistSpotify: artistSpotify,
    };

    console.log("second: ", showUpdate);

    await firestore.collection("shows").doc(id).set(showUpdate);
    history.push("/");
  }

  //---------------------------image handling-----------------------------------//
  //imageLg or splash image
  const handleImageLg = async (event) => {
    event.preventDefault();
    let storageRef = app.storage().ref();
    let imageLgRef = storageRef.child(`/images/${id}/SplashImage`);

    await imageLgRef.put(event.target.files[0]).then((snapshot) => {
      imageLgRef.getDownloadURL().then((url) => {
        setImageLg(url);
        if (event.target.files[0]) {
          setImageLgName(event.target.files[0].name);
        }
        console.log(url);
        progressLg = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressLg(progressLg);
      });
    });
  };

  const handleImage1 = async (event) => {
    event.preventDefault();
    let storageRef = app.storage().ref();
    let image1Ref = storageRef.child(`/images/${id}/Image1`);

    await image1Ref.put(event.target.files[0]).then((snapshot) => {
      image1Ref.getDownloadURL().then((url) => {
        setImage1(url);
        if (event.target.files[0]) {
          setImage1Name(event.target.files[0].name);
        }
        console.log(url);
        progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress1(progress1);
      });
    });
  };

  const handleImage2 = async (event) => {
    event.preventDefault();
    let storageRef = app.storage().ref();
    let image2Ref = storageRef.child(`/images/${id}/Image2`);

    await image2Ref.put(event.target.files[0]).then((snapshot) => {
      image2Ref.getDownloadURL().then((url) => {
        setImage2(url);
        if (event.target.files[0]) {
          setImage2Name(event.target.files[0].name);
        }
        console.log(url);
        progress2 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress2(progress2);
      });
    });
  };

  const handleImage3 = async (event) => {
    event.preventDefault();
    let storageRef = app.storage().ref();
    let image3Ref = storageRef.child(`/images/${id}/Image3`);

    await image3Ref.put(event.target.files[0]).then((snapshot) => {
      image3Ref.getDownloadURL().then((url) => {
        setImage3(url);
        if (event.target.files[0]) {
          setImage3Name(event.target.files[0].name);
        }
        console.log(url);
        progress3 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress3(progress3);
      });
    });
  };

  //----------reset progress bar functions----------//
  function resetProgressLg() {
    setProgressLg(0);
  }
  function resetProgress1() {
    setProgress1(0);
  }
  function resetProgress2() {
    setProgress2(0);
  }
  function resetProgress3() {
    setProgress3(0);
  }

  //---------------------------------------------------------------------------//

  return (
    /* Artist Form container */
    <div className="artist_container">
      {/* Container of the artist form */}
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh", minWidth: "90vw" }}
      >
        <div className="w-100" >
          <h2 className="text-center mb-2">Artist Information Form</h2>
          <Card>
            {/* Start of the form */}
            <Form
              id="ArtistForm"
              onSubmit={enterNewArtist}
              type="submit"
              value="submit"
            >
              <div id="artistCard" className="d-flex flex-direction row-3">
                <Card.Body className="artist">
                  <h2 className="text-center mb-2">Basic Info</h2>
                  <br />

                  {/* Artist name container */}
                  <Form.Group id="artName">
                    <Form.Label>Artist Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="artistInput"
                      placeholder="Enter Artist Name"
                      value={artist}
                      onChange={(evt) => setArtist(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Contact Name container */}
                  <Form.Group id="contactName">
                    <Form.Label>Contact Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNameInput"
                      placeholder="Enter Contact Name"
                      value={contactName}
                      onChange={(evt) => setContactName(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Phone container */}
                  <Form.Group id="contactPhone">
                    <Form.Label>Contact Phone:</Form.Label>
                    <NumberFormat
                      className="form-control"
                      mask="_"
                      format="(###) ###-####"
                      placeholder="Enter Phone"
                      type="phone"
                      name="phoneInput"
                      value={phone}
                      onChange={(evt) => setPhone(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Email container */}
                  <Form.Group id="contactEmail">
                    <Form.Label>Contact Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailInput"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Show name container*/}
                  <Form.Group id="title">
                    <Form.Label>Show Title:</Form.Label>
                    <Form.Control
                      type="text"
                      name="titleInput"
                      placeholder="Enter Show Title"
                      value={title}
                      onChange={(evt) => setTitle(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Description of the show container */}
                  <Form.Group>
                    <Form.Label>Description of the Show: </Form.Label>
                    <textarea
                      className="form-control"
                      type="text"
                      id="showDesc"
                      name="showDescInput"
                      placeholder="Enter Show Description"
                      // I'd like to make it so that this field looks like bio looks
                      rows="4"
                      value={description}
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Bio Container */}
                  <Form.Group>
                    <Form.Label>Bio:</Form.Label>
                    <textarea
                      className="form-control"
                      name="bioInput"
                      rows="4"
                      placeholder="Enter Artist Bio"
                      value={bio}
                      onChange={(evt) => setBio(evt.target.value)}
                    />
                  </Form.Group>
                </Card.Body>
                <Card.Body className="socials">
                  {/* Website link COntainer */}
                  <h2 className="text-center mb-2">Social Media Links</h2>
                  <br></br>
                  {/* Website link COntainer */}
                  <Form.Group id="socialMediaLink">
                    <h5>Social Media Links:</h5>
                    <p>These will appear as hyperlinked icons on the Artist Info page.</p>
                    <Form.Label>
                      Website:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="websiteInput"
                      onChange={(evt) => setArtistWebsite(evt.target.value)}
                      value={artistWebsite}
                      placeholder="Paste Your Website Link Here"
                    />
                  </Form.Group>

                  {/* Facebook link Container */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      Facebook:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="facebookInput"
                      onChange={(evt) => setArtistFacebook(evt.target.value)}
                      value={artistFacebook}
                      placeholder="Paste Your Facebook Link Here"
                    />
                  </Form.Group>

                  {/* YouTube COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      YouTube:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="youtubeInput"
                      onChange={(evt) => setArtistYouTube(evt.target.value)}
                      value={artistYouTube}
                      placeholder="Paste Your YouTube Link Here"
                    />
                  </Form.Group>

                  {/* Instagram COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      Instagram:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="InstagramInput"
                      onChange={(evt) => setArtistInstagram(evt.target.value)}
                      value={artistInstagram}
                      placeholder="Paste Your Instagram Link Here"
                    />
                  </Form.Group>

                  {/* Spotify link COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      Spotify:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="spotifyInput"
                      onChange={(evt) => setArtistSpotify(evt.target.value)}
                      value={artistSpotify}
                      placeholder="Paste Your Spotify Link Here"
                    />
                  </Form.Group>


                </Card.Body>
              </div>
              <h5>Images Upload:</h5>
              <div className="d-flex flex-direction row-3">
                <Card.Body className="imagesUploadArtistForm">

                  {/* Splash Image Container */}
                  <div className="artistImagesCard">
                    <Form.Group>
                      <span>
                        Splash Image:{" "}
                        <Form.Label>
                          {" "}
                          {imageLg
                            ? imageLgName
                            : "Please choose a Splash Image"}{" "}
                        </Form.Label>
                        <Form.Text className="mb-3" muted>
                          This will appear on the Home and Season page.
                    </Form.Text>
                      </span>
                      {imageLg ? (
                        <img className="thumbNail" src={imageLg} alt="" />
                      ) : (
                        <div />
                      )}

                      <Form.File
                        className="img_submit mt-3"
                        name="imageLgIn"
                        onChange={handleImageLg}
                        onClick={resetProgressLg}
                      />
                    </Form.Group>
                    <ProgressBar
                      striped
                      variant="info"
                      now={progressLg}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3 mb-5"
                      variant="outline-danger"
                      onClick={(e) => setImageLg("")}
                    >
                      Delete Splash Image
                   </Button>
                    <br></br>
                    {/* Image 1 Container */}
                  </div>
                  <div className="artistImagesCard">
                    <Form.Group>
                      <span>
                        Image 1:{" "}
                        <Form.Label>
                          {" "}
                          {image1 ? image1Name : "Please choose an Image"}{" "}
                        </Form.Label>
                        <Form.Text className="mb-3" muted>
                          This will appear on the Artist and Artist Info page.
                    </Form.Text>
                      </span>

                      {image1 ? (
                        <img className="thumbNail" src={image1} alt="" />
                      ) : (
                        <div />
                      )}

                      <Form.File
                        className="img_submit mt-3"
                        name="image1In"
                        onChange={handleImage1}
                        onClick={resetProgress1}
                      />
                    </Form.Group>
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress1}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3 mb-5"
                      variant="outline-danger"
                      onClick={(e) => setImage1("")}
                    >
                      Delete Image 1
                    </Button>
                  </div>

                  {/* Image 2 Container */}
                  <div className="artistImagesCard">
                    <Form.Group>

                      <span>
                        Image 2:{" "}
                        <Form.Label>
                          {" "}
                          {image2 ? image2Name : "Please choose an Image"}{" "}
                        </Form.Label>
                        <Form.Text className="mb-3" muted>
                          This will appear on the Artist and Artist Info page.
                    </Form.Text>
                      </span>

                      {image2 ? (
                        <img className="thumbNail" src={image2} alt="" />
                      ) : (
                        <div />
                      )}
                      <Form.File
                        className="img_submit mt-3"

                        name="image2In"
                        onChange={handleImage2}
                        onClick={resetProgress2}
                      />
                    </Form.Group>
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress2}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3 mb-5"
                      variant="outline-danger"
                      onClick={(e) => setImage2("")}
                    >
                      Delete Image 2
                    </Button>

                  </div>
                  {/* Image 3 Container */}
                  <div className="artistImagesCard">
                    <Form.Group>

                      <span>
                        Image 3:{" "}
                        <Form.Label>
                          {" "}
                          {image3 ? image3Name : "Please choose an Image"}{" "}
                        </Form.Label>
                        <Form.Text className="mb-3" muted>
                          This will appear on the Artist and Artist Info page.
                    </Form.Text>
                      </span>

                      {/* <Image src={image3} thumbnail /> */}
                      {image3 ? (
                        <img className="thumbNail" src={image3} alt="" />
                      ) : (
                        <div />
                      )}
                      <Form.File
                        className="img_submit mt-3"
                        className="img_submit"
                        name="image3In"
                        onChange={handleImage3}
                        onClick={resetProgress3}
                      />
                    </Form.Group>
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress3}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3 mb-5"
                      variant="outline-danger"
                      onClick={(e) => setImage3("")}
                      onMouseDown={resetProgress3}
                    >
                      Delete Image 3
                    </Button>
                  </div>
                  {/* Submit Button */}
                  <Button id="form_button" className="w-75 mb-5 btn btn-primary" type="submit">
                    Submit
                </Button>
                </Card.Body>

              </div>
            </Form>
          </Card>
        </div>
      </Container>
    </div>

  );
}
