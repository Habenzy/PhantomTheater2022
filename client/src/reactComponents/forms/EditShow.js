import React, { useState, useEffect } from "react";
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
      // if it has data then set it in state
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

  useEffect(() => {
    getOneShow();
  }, [])


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

  const handleAddShow = () => {
    setNumberOfShows((numberOfShows += 1));
    console.log(numberOfShows);
  };

  const handleDates = (evt) => {
    evt.preventDefault();
    let currentDates = dates;
    currentDates.push(evt.target.value);
    currentDates.sort();
    setDates(currentDates);
  };

  const deleteDate = (evt, showIndex) => {
    let processDates = dates;
    processDates.splice(showIndex, 1).sort();
    setDates(processDates);
    setNumberOfShows(numberOfShows - 1)
  };

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

                <Card.Body className="admin">
                  <h5>Admin Input Information:</h5>
                  <Form.Group>
                    <Form.Label>Show Title:</Form.Label>
                    <p>This will appear on the Home page and Season page.</p>
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
                    <p>This will appear on the Artists page.</p>
                    <textarea
                      className="form-control"
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
                    <p>This will not appear on the site. For internal use.</p>
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
                    <p>IMPORTANT! Used by database for site function.</p>
                    <select
                      className="form-control"
                      id="status"
                      name="statusIn"
                      value={status}
                      onChange={(evt) => setStatus(evt.target.value)}
                    >
                      <option>Proposal </option>
                      <option>Booked</option>
                      <option>Archive</option>
                    </select>
                  </Form.Group>
                  {/* Show Time Input Controls ****************************** */}

                  <Form.Group>
                    <div className="showtimes">
                      <Form.Label>Showtimes:</Form.Label>
                      <p>
                        Remember to hit SUBMIT at the bottom of this page to
                        save date changes. These will appear on the Home and
                        Season page.
                      </p>
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
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates mb-1"
                            value={dates[0]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 0)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}

                      {numberOfShows >= 2 ? (
                        <Form.Group>
                          <Form.Control
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates"
                            value={dates[1]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 1)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}

                      {numberOfShows >= 3 ? (
                        <Form.Group>
                          <Form.Control
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates"
                            value={dates[2]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 2)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}

                      {numberOfShows >= 4 ? (
                        <Form.Group>
                          <Form.Control
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates"
                            value={dates[3]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 3)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}

                      {numberOfShows >= 5 ? (
                        <Form.Group>
                          <Form.Control
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates"
                            value={dates[4]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 4)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}

                      {numberOfShows >= 6 ? (
                        <Form.Group>
                          <Form.Control
                            onChange={(evt) => handleDates(evt)}
                            type="dateTime-local"
                            className="dates"
                            value={dates[5]}
                          />
                          <Button
                            // type="submit"
                            className="delete"
                            width="50px"
                            onClick={(evt) => deleteDate(evt, 5)}
                          >
                            Delete Date
                          </Button>
                        </Form.Group>
                      ) : (
                        console.log()
                      )}
                    </div>
                  </Form.Group>
                  <hr />
                </Card.Body>
                {/* left  column of form END*/}
                {/* middle  column of form */}
                <Card.Body>
                  <Form.Group>
                    <h5>Artist Input Information:</h5>
                    <Form.Label>Artist Name: </Form.Label>
                    <p>
                      This will appear on Season, Artist, and Artist Info pages.
                    </p>
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
                    <p>For internal use.</p>
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
                    <p>For internal use.</p>
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
                    <p>This will appear on the Artist page.</p>
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
                    <p>This will appear on the Artist and Artist Info page.</p>
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
                    <p>This will not appear on the site. For internal use.</p>
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
                </Card.Body>
                {/* middle  column of form END*/}
              </div>
              <div className="d-flex flex-direction row-3">
                {/* Website link COntainer */}
                <Card.Body id="socialMediaCard">
                  <Form.Group id="socialMediaLink">
                    <h5>Social Media Links:</h5>
                    <p>These will appear as links on the Artist Info page.</p>
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
                {/* right  column of form */}

                <Card.Body className="imageCard">
                  {/* Splash Image Container **************************************/}
                  <div className="imageUpload">
                    <h5>Image Uploads:</h5>
                    <Form.Group>
                      <FormLabel>Splash Image Upload:</FormLabel>
                      <p>
                        This will appear as the main image on the Home page.
                      </p>
                      {imageLg ? (
                        <img className="thumbNail" src={imageLg} alt="" />
                      ) : (
                        <div />
                      )}
                    </Form.Group>
                    <Form.File
                      className="img_submit"
                      label={
                        imageLg
                          ? "Splash Image: " + imageLgName
                          : "Please choose a Splash Image"
                      }
                      name="imageLgIn"
                      onChange={handleImageLg}
                      onClick={resetProgressLg}
                    />
                    <ProgressBar
                      striped
                      variant="info"
                      now={progressLg}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3"
                      variant="outline-danger"
                      onClick={(e) => setImageLg("")}
                    >
                      Delete Splash Image
                    </Button>
                  </div>
                  <br></br>

                  {/* Image 1 Container */}
                  <div className="imageUpload">
                    <br></br>
                    <Form.Group>
                      <FormLabel>Image 1 Upload:</FormLabel>
                      <p>
                        This will appear on the Artist and Artist Info page.
                      </p>

                      {image1 ? (
                        <img className="thumbNail" src={image1} alt="" />
                      ) : (
                        <div />
                      )}
                    </Form.Group>
                    <Form.File
                      className="img_submit"
                      label={
                        image1
                          ? "Image 1: " + image1Name
                          : "Please choose Image 1"
                      }
                      name="image1In"
                      onChange={handleImage1}
                      onClick={resetProgress1}
                    />
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress1}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3"
                      variant="outline-danger"
                      onClick={(e) => setImage1("")}
                    >
                      Delete Image 1
                    </Button>
                  </div>
                  <br></br>
                  {/* Image 2 Container */}
                  <div className="imageUpload">
                    <Form.Group>
                      <FormLabel>Image 2 Upload:</FormLabel>
                      <p>
                        This will appear on the Artist and Artist Info page.
                      </p>
                      {image2 ? (
                        <img className="thumbNail" src={image2} alt="" />
                      ) : (
                        <div />
                      )}
                    </Form.Group>
                    <Form.File
                      className="img_submit"
                      label={
                        image2
                          ? "Image 2: " + image2Name
                          : "Please choose Image 2"
                      }
                      name="image2In"
                      onChange={handleImage2}
                      onClick={resetProgress2}
                    />
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress2}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3"
                      variant="outline-danger"
                      onClick={(e) => setImage2("")}
                    >
                      Delete Image 2
                    </Button>
                  </div>
                  <br></br>
                  {/* Image 3 Container */}
                  <div className="imageUpload">
                    <Form.Group>
                      <FormLabel>Image 3 Upload:</FormLabel>
                      <p>
                        This will appear on the Artist and Artist Info page.
                      </p>
                      {image3 ? (
                        <img className="thumbNail" src={image3} alt="" />
                      ) : (
                        <div />
                      )}
                    </Form.Group>
                    <Form.File
                      className="img_submit"
                      label={
                        image3
                          ? "Image 3: " + image3Name
                          : "Please choose Image 3"
                      }
                      name="image3In"
                      onChange={handleImage3}
                      onClick={resetProgress3}
                    />
                    <ProgressBar
                      striped
                      variant="info"
                      now={progress3}
                    ></ProgressBar>
                    <Button
                      type="reset"
                      className="mt-3"
                      variant="outline-danger"
                      onClick={(e) => setImage3("")}
                      onMouseDown={resetProgress3}
                    >
                      Delete Image 3
                    </Button>
                  </div>
                  <br></br>
                </Card.Body>
              </div>
              {/* right  column of form END*/}
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
