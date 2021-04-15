import React, { useState } from "react";
import app, { firestore } from "../firebase/firebase";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Button, Card, Container, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../formcss/editShow.css";
import NumberFormat from "react-number-format";

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
  video1: "video1",
  artistWebsite: "artistWebsite",
  artistFacebook: "artistFacebook",
  artistYouTube: "artistYouTube",
  artistInstagram: "artistInstagram",
  artistSpotify: "artistSpotify",
};

export default function EditShow() {

  let [numberOfShows, setNumberOfShows] = useState(0);
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

  //image variables
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

      numberOfShows !== showInData.dates.length
        ? setNumberOfShows(showInData.dates.length)
        : console.log();
    }
  }

  if (thisShow.title === "title") {
    getOneShow();
  }

  let id = document.location.hash.substring(1);
  //*************************************************** */

  async function enterUpdates(event) {
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
    history.push("/adminDash");
  }





  //***********   show dates handling   ******************* */

  const refresh = () => {
    window.location.reload(false)
  }

  const handleAddShow = () => {
    setNumberOfShows((numberOfShows += 1));
    console.log(numberOfShows);
  };

  const handleDates = (evt) => {
    console.log("target value: ", evt.target.value)
    console.log("datess: ", dates)
    evt.preventDefault();
    let currentDates = dates;

    currentDates.push(evt.target.value);
    currentDates.sort();
    setDates(currentDates);
    console.log(dates);
  };

  const deleteDate = (evt, showIndex) => {
    console.log("edit show " + evt.target.value + showIndex)
    console.log("before", dates)
    let processDates = dates
    processDates.splice(showIndex, 1).sort()
    setDates(processDates)
    console.log("after ", dates)
    console.log("edit show " + id)
    enterUpdates(evt)
    refresh()
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

  // function resetProgress(bar) {
  //   if (bar === 'lg') {
  //     setProgressLg(0)
  //   }
  //   if (bar === 1) {
  //     setProgress1(0)
  //   }
  //   if (bar === 2) {
  //     setProgress2(0)
  //   }
  //   if (bar === 3) {
  //     setProgress3(0)
  //   }
  // }

  //---------------------------------------------------------------------------//

  return (
    <div className="edit_show">

      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh", minWidth: "90vw" }}

      >
        <div className="w-100">

          <Card>
            <Form
              id="adminForm"
              onSubmit={enterUpdates}
              type="submit"
              value="submit"
            >
              <div className="d-flex flex-direction row-3">
                {/* left  column of form */}

                <Card.Body>

                  <h5>Admin Input Information:</h5>
                  <Form.Group>

                    <Form.Label>Show Title:</Form.Label>
                    <Form.Control
                      type="text"
                      id="title"
                      name="titleIn"
                      placeholder="Enter Title"
                      value={title}
                      onChange={(evt) => setTitle(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Show Blurb:</Form.Label>

                    <textarea
                      className='form-control'
                      rows="4"
                      type="text"
                      id="blurb"
                      name="blurbIn"
                      placeholder="Enter Blurb"
                      value={blurb}
                      onChange={(evt) => setBlurb(evt.target.value)}
                    />

                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Show Type:</Form.Label>
                    <Form.Control
                      type="text"
                      id="type"
                      name="typeIn"
                      placeholder="Enter Show Type"
                      value={type}
                      onChange={(evt) => setType(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status:</Form.Label>
                    <select
                      className="form-control"
                      id="status"
                      name="statusIn"
                      value={status}
                      onChange={(evt) => setStatus(evt.target.value)}
                    >
                      <option >Proposal </option>
                      <option>Booked</option>
                      <option>Done</option>
                    </select>
                  </Form.Group>
                  {/* Show Time Input Controls ****************************** */}


                  <Form.Group>
                    <Form.Label>Showtimes:</Form.Label>

                    <Form.Group>
                      <Button
                        id="show_button"
                        className="w-100"
                        onClick={handleAddShow}
                      >
                        Add Showtimes
                              </Button>
                    </Form.Group>

                    {numberOfShows >= 1 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates mb-1"
                          defaultValue={dates[0]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 0)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}

                    {numberOfShows >= 2 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates"
                          defaultValue={dates[1]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 1)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}

                    {numberOfShows >= 3 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates"
                          defaultValue={dates[2]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 2)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}

                    {numberOfShows >= 4 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates"
                          defaultValue={dates[3]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 3)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}

                    {numberOfShows >= 5 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates"
                          defaultValue={dates[4]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 4)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}

                    {numberOfShows >= 6 ? (
                      <Form.Group>
                        <Form.Control
                          onBlur={(evt) => handleDates(evt)}
                          type="dateTime-local"
                          className="dates"
                          defaultValue={dates[5]}
                        />
                        <Button
                          // type="submit"
                          className="delete"
                          width="50px"
                          onClick={(evt) => deleteDate(evt, 5)}
                        >Delete Date</Button>
                      </Form.Group>
                    ) : (
                      console.log()
                    )}
                  </Form.Group>
                  <hr />
                </Card.Body>
                {/* left  column of form END*/}
                {/* middle  column of form */}
                <Card.Body>

                  <Form.Group>
                    <h5>Artist Input Information:</h5>
                    <Form.Label>Artist Name: </Form.Label>
                    <Form.Control
                      type="text"
                      id="artist"
                      name="artistInput"
                      placeholder="Enter Artist Name"
                      value={artist}
                      onChange={(evt) => setArtist(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Contact Name: </Form.Label>
                    <Form.Control
                      type="text"
                      id="contactName"
                      name="contactNameInput"
                      placeholder="Enter Contact Name"
                      value={contactName}
                      onChange={(evt) => setContactName(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone: </Form.Label>
                    <NumberFormat
                      className="form-control"
                      mask="_"
                      format="(###) ###-####"
                      placeholder="Enter Phone"
                      type="text"
                      id="phone"
                      name="phoneInput"
                      value={phone}
                      onChange={(evt) => setPhone(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      name="emailInput"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Artist Bio:</Form.Label>
                    <textarea
                      className="form-control"
                      rows="4"
                      type="text"
                      id="bio"
                      name="bioInput"
                      placeholder="Enter Artist Bio"
                      onChange={(evt) => setBio(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Description of the Show: </Form.Label>
                    <textarea
                      className="form-control"
                      rows="6"
                      type="text"
                      id="showDescription"
                      name="showDescriptionInput"
                      placeholder="Enter Show Decription"
                      value={description}
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </Form.Group>

                  {/* Website link COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      {artistWebsite ? "Website: " + artistWebsite : "Website"}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="vidInput"
                      onChange={(evt) => setArtistWebsite(evt.target.value)}
                      placeholder="Paste Your Website Link Here"
                    />
                  </Form.Group>

                  {/* Facebook link COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      {artistFacebook
                        ? "Facebook: " + artistFacebook
                        : "Facebook"}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="vidInput"
                      onChange={(evt) => setArtistFacebook(evt.target.value)}
                      placeholder="Paste Your Facebook Link Here"
                    />
                  </Form.Group>

                  {/* YouTube COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      {artistYouTube ? "YouTube: " + artistYouTube : "YouTube"}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="vidInput"
                      onChange={(evt) => setArtistYouTube(evt.target.value)}
                      placeholder="Paste Your YouTube Link Here"
                    />
                  </Form.Group>

                  {/* Instagram COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      {artistInstagram
                        ? "Instagram: " + artistInstagram
                        : "Instagram"}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="vidInput"
                      onChange={(evt) => setArtistInstagram(evt.target.value)}
                      placeholder="Paste Your Instagram Link Here"
                    />
                  </Form.Group>

                  {/* Spotify link COntainer */}
                  <Form.Group id="socialMediaLink">
                    <Form.Label>
                      {artistSpotify ? "Spotify: " + artistSpotify : "Spotify"}
                    </Form.Label>
                    <Form.Control
                      type="url"
                      name="vidInput"
                      onChange={(evt) => setArtistSpotify(evt.target.value)}
                      placeholder="Paste Your Spotify Link Here"
                    />
                  </Form.Group>
                </Card.Body>
                {/* middle  column of form END*/}
                {/* right  column of form */}
                <Card.Body className="imageCard">
                  <h5>Image Uploads:</h5>
                  {/* Splash Image Container **************************************/}

                  <Form.Group>
                    <FormLabel>Splash Image Upload:</FormLabel>
                    <br />

                    <img className="thumbNail" src={imageLg} alt="" />
                  </Form.Group>
                  <ProgressBar
                    striped
                    variant="info"
                    now={progressLg}
                  ></ProgressBar>
                  <Form.File
                    className="img_submit"
                    label={
                      imageLgName
                        ? "Splash Image: " + imageLgName
                        : "Please choose a Splash Image"
                    }
                    name="imageLgIn"
                    onChange={handleImageLg}
                    onClick={resetProgressLg}
                  />

                  <br></br>

                  {/* Image 1 Container */}

                  <Form.Group>
                    <FormLabel>Image 1 Upload:</FormLabel>
                    <br />

                    <img className="thumbNail splash" src={image1} alt="" />
                  </Form.Group>
                  <ProgressBar
                    striped
                    variant="info"
                    now={progress1}
                  ></ProgressBar>
                  <Form.File
                    className="img_submit"
                    label={
                      image1Name
                        ? "Image 1: " + image1Name
                        : "Please choose Image 1"
                    }
                    name="image1In"
                    onChange={handleImage1}
                    onClick={resetProgress1}
                  />

                  <br></br>
                  {/* Image 2 Container */}

                  <Form.Group>
                    <FormLabel>Image 2 Upload:</FormLabel>
                    <br />
                    <img className="thumbNail splash" src={image2} alt="" />
                  </Form.Group>
                  <ProgressBar
                    striped
                    variant="info"
                    now={progress2}
                  ></ProgressBar>
                  <Form.File
                    className="img_submit"
                    label={
                      image2Name
                        ? "Image 2: " + image2Name
                        : "Please choose Image 2"
                    }
                    name="image2In"
                    onChange={handleImage2}
                    onClick={resetProgress2}
                  />

                  <br></br>
                  {/* Image 3 Container */}

                  <Form.Group>
                    <FormLabel>Image 3 Upload:</FormLabel>
                    <br />
                    <img className="thumbNail splash" src={image3} alt="" />
                  </Form.Group>

                  <ProgressBar
                    striped
                    variant="info"
                    now={progress3}
                  ></ProgressBar>
                  <Form.File
                    className="img_submit"
                    label={
                      image3Name
                        ? "Image 3: " + image3Name
                        : "Please choose Image 3"
                    }
                    name="image3In"
                    onChange={handleImage3}
                    onClick={resetProgress3}
                  />

                  <br></br>
                </Card.Body>
                {/* right  column of form END*/}

              </div>
              <div className="text-center">
                <Button id="show_button" className="w-75 mb-5" type="submit">
                  Submit Updates
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
}
