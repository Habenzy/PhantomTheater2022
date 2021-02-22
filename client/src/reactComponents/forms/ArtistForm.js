import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
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
   artistSpotify: "artistSpotify"
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
   let [imageLgName, setImageLgName] = useState("")
   let [image1, setImage1] = useState("");
   let [image1Name, setImage1Name] = useState("");
   let [image2, setImage2] = useState("");
   let [image2Name, setImage2Name] = useState("");
   let [image3, setImage3] = useState("");
   let [image3Name, setImage3Name] = useState("");

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
         showInData.imageLgName ? setImageLgName(showInData.imageLgName) : setImageLgName("");
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image1Name ? setImage1Name(showInData.image1Name) : setImage1Name("");
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image2Name ? setImage2Name(showInData.image2Name) : setImage2Name("");
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");
         showInData.image3Name ? setImage3Name(showInData.image3Name) : setImage3Name("");

         showInData.artistWebsite ? setArtistWebsite(showInData.artistWebsite) : setArtistWebsite("");
         showInData.artistFacebook ? setArtistFacebook(showInData.artistFacebook) : setArtistFacebook("");
         showInData.artistYouTube ? setArtistYouTube(showInData.artistYouTube) : setArtistYouTube("");
         showInData.artistInstagram ? setArtistInstagram(showInData.artistInstagram) : setArtistInstagram("");
         showInData.artistSpotify ? setArtistSpotify(showInData.artistSpotify) : setArtistSpotify("");

      }
   }

   if (thisShow.title === "title") {
      getOneShow();
   }

   let id = document.location.hash.substring(1);

   //*************************************************** */

   async function enterNewArtist(event) {
      console.log('enter new artist fired')
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
         artistSpotify: artistSpotify
      };

      console.log("second: ", showUpdate);

      await firestore.collection("shows").doc(id).set(showUpdate);
      history.push("/");
   }


   //---------------------------image handling-----------------------------------//
   //imageLg or splash image
   const handleImageLg = async (event) => {
      event.preventDefault()
      let storageRef = app.storage().ref()
      let imageLgRef = storageRef.child(`/images/${id}/SplashImage`)


      await imageLgRef.put(event.target.files[0]).then((snapshot) => {
         imageLgRef.getDownloadURL().then((url) => {
            setImageLg(url)
            setImageLgName(event.target.files[0].name)
            console.log(url)
         })
      })
   }

   const handleImage1 = async (event) => {
      event.preventDefault()
      let storageRef = app.storage().ref()
      let image1Ref = storageRef.child(`/images/${id}/Image1`)

      await image1Ref.put(event.target.files[0]).then((snapshot) => {
         image1Ref.getDownloadURL().then((url) => {
            setImage1(url)
            setImage1Name(event.target.files[0].name)
            console.log(url)
         })
      })
   }

   const handleImage2 = async (event) => {
      event.preventDefault()
      let storageRef = app.storage().ref()
      let image2Ref = storageRef.child(`/images/${id}/Image2`)

      await image2Ref.put(event.target.files[0]).then((snapshot) => {
         image2Ref.getDownloadURL().then((url) => {
            setImage2(url)
            setImage2Name(event.target.files[0].name)
            console.log(url)
         })
      })
   }

   const handleImage3 = async (event) => {
      event.preventDefault()
      let storageRef = app.storage().ref()
      let image3Ref = storageRef.child(`/images/${id}/Image3`)

      await image3Ref.put(event.target.files[0]).then((snapshot) => {
         image3Ref.getDownloadURL().then((url) => {
            setImage3(url)
            setImage3Name(event.target.files[0].name)
            console.log(url)
         })
      })
   }


   // //---------------------------------------------------------------------------//

   return (
      /* Artist Form container */
      <div className="artist_container">
         {/* Container of the artist form */}
         <Container
            className="d-flex align-items center justify-content-center mt-5"
            style={{ minHeight: "80vh" }}
         >
            <div className="w-100" style={{ maxWidth: "420px" }}>
               <Card>
                  {/* Start of the form */}
                  <Form
                     id="ArtistForm"
                     onSubmit={enterNewArtist}
                     type="submit"
                     value="submit"
                  >



                     <Card.Body>
                        <h2 className="text-center mb-2">Artist Information Form</h2>
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
                           <Form.Control
                              type="text"
                              id="showDesc"
                              name="showDescInput"
                              placeholder="Enter Show Description"
                              // I'd like to make it so that this field looks like bio looks
                              height="20px"
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
                              rows="6"
                              placeholder="Enter Artist Bio"
                              value={bio}
                              onChange={(evt) => setBio(evt.target.value)}
                           />
                        </Form.Group>

                        {/* Splash Image Container */}
                        <Form.Group>
                           <span>Splash Image: <Form.Label> {imageLgName ? imageLgName : "Please choose a Splash Image"} </Form.Label></span>
                           <Form.File
                              className="img_submit"
                              name="imageLgIn"
                              onChange={handleImageLg}
                           />
                        </Form.Group>

                        {/* Image 1 Container */}
                        <Form.Group>
                           <span>Image 1: <Form.Label> {image1Name ? image1Name : "Please choose an Image"} </Form.Label></span>
                           <Form.File
                              className="img_submit"
                              name="image1In"
                              onChange={handleImage1}
                           />
                        </Form.Group>

                        {/* Image 2 Container */}
                        <Form.Group>
                           <span>Image 2: <Form.Label> {image2Name ? image2Name : "Please choose an Image"} </Form.Label></span>
                           <Form.File
                              className="img_submit"
                              name="image2In"
                              onChange={handleImage2}
                           />
                        </Form.Group>

                        {/* Image 3 Container */}
                        <Form.Group>
                           <span>Image 3: <Form.Label> {image3Name ? image3Name : "Please choose an Image"} </Form.Label></span>
                           <Form.File
                              className="img_submit"
                              name="image3In"
                              onChange={handleImage3}
                           />
                        </Form.Group>

                        {/* Website link COntainer */}
                        <Form.Group id="socialMediaLink">
                           <Form.Label>{artistWebsite ? "Website: " + artistWebsite : "Website"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setArtistWebsite(evt.target.value)}
                              placeholder="Paste Your Website Link Here"
                           />
                        </Form.Group>

                        {/* Facebook link COntainer */}
                        <Form.Group id="socialMediaLink">
                           <Form.Label>{artistFacebook ? "Facebook: " + artistFacebook : "Facebook"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setArtistFacebook(evt.target.value)}
                              placeholder="Paste Your Facebook Link Here"
                           />
                        </Form.Group>

                        {/* YouTube COntainer */}
                        <Form.Group id="socialMediaLink">
                           <Form.Label>{artistYouTube ? "YouTube: " + artistYouTube : "YouTube"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setArtistYouTube(evt.target.value)}
                              placeholder="Paste Your YouTube Link Here"
                           />
                        </Form.Group>

                        {/* Instagram COntainer */}
                        <Form.Group id="socialMediaLink">
                           <Form.Label>{artistInstagram ? "Instagram: " + artistInstagram : "Instagram"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setArtistInstagram(evt.target.value)}
                              placeholder="Paste Your Instagram Link Here"
                           />
                        </Form.Group>

                        {/* Spotify link COntainer */}
                        <Form.Group id="socialMediaLink">
                           <Form.Label>{artistSpotify ? "Spotify: " + artistSpotify : "Spotify"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setArtistSpotify(evt.target.value)}
                              placeholder="Paste Your Spotify Link Here"
                           />
                        </Form.Group>

                        {/* Submit Button */}
                        <Button id="form_button" className="w-100" type="submit">
                           Submit
                        </Button>

                     </Card.Body>
                  </Form>
               </Card>
            </div>
         </Container>
      </div>
   );
}
