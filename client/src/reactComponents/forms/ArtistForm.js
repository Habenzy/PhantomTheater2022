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
   imageLg: "imageLg",
   status: "status",
   dates: [],
   artist: "artist",
   contactName: "contactName",
   phone: "phone",
   email: "email",
   bio: "bio",
   description: "description",
   image1: "image1",
   image2: "image2",
   image3: "image3",
   video1: "video1",
   link1: "link1",
   link2: "link2",
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
   let [video1, setVideo1] = useState("");
   let [link1, setLink1] = useState("");
   let [link2, setLink2] = useState("");
   //image variables
   let [imageLg, setImageLg] = useState("");
   let [image1, setImage1] = useState("");
   let [image2, setImage2] = useState("");
   let [image3, setImage3] = useState("");
   let [imageLgFile, setImageLgFile] = useState("");
   let [image1File, setImage1File] = useState("");
   let [image2File, setImage2File] = useState("");
   let [image3File, setImage3File] = useState("");

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
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");

         showInData.imageLgFile
            ? setImageLgFile(showInData.imageLgFile)
            : setImageLgFile("");
         showInData.image1File
            ? setImage1File(showInData.image1File)
            : setImage1File("");
         showInData.image2File
            ? setImage2File(showInData.image2File)
            : setImage2File("");
         showInData.image3File
            ? setImage3File(showInData.image3File)
            : setImage3File("");

         showInData.video1 ? setVideo1(showInData.video1) : setVideo1("");
         showInData.link1 ? setLink1(showInData.link1) : setLink1("");
         showInData.link2 ? setLink2(showInData.link2) : setLink2("");

         console.log(thisShow)
      }
   }

   if (thisShow.title === "title") {
      getOneShow();
   }

   //*************************************************** */

   async function enterNewArtist(event) {
      console.log('enter new artist fired')
      event.preventDefault();
      console.log("Updating...");

      // take each date input and .push onto the dates array

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
         image1: image1,
         image2: image2,
         image3: image3,
         video1: video1,
         link1: link1,
         link2: link2,
      };

      console.log("second: ", showUpdate);
      let id = document.location.hash.substring(1);
      await firestore.collection("shows").doc(id).set(showUpdate);
      history.push("/adminDash");
   }


   //---------------------------image handling-----------------------------------//
   //imageLg or splash image
   const handleChange = (event) => {
      if (event.target.files[0]) {
         setImageLgFile(event.target.files[0]);
      }
      handleUpload(event);
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
      }
      handleUpload1(event);
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
      }
      handleUpload2(event);
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
      }
      handleUpload3(event);
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
                        {/* End of Artist Name Container */}
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
                        {/* End of Contact container */}
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
                        {/* End of Phone container */}
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
                        {/* End of email container */}
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
                        {/* End of show name container */}
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
                        {/* End of description container */}
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
                        {/*End of bio container */}
                        <Form.Group>
                           <Form.Label>Image (large) / Splash Image: </Form.Label>
                           <Form.Control
                              className="img_submit"
                              type="file"
                              name="imageLgIn"
                              onChange={handleChange}
                           />
                           {/* <progress value="0" max="100" id="upload"></progress> */}
                        </Form.Group>
                        {/* Image 1 Container */}
                        <Form.Group>
                           <Form.Label>Image 1: </Form.Label>
                           <Form.Control
                              type="file"
                              name="image1Input"
                              className="img_submit"
                              onChange={handleChange1}
                           />
                        </Form.Group>
                        {/* End of Image 1 Container */}
                        {/* Image 2 Container */}
                        <Form.Group>
                           <Form.Label>Image 2:  </Form.Label>
                           <Form.Control
                              type="file"
                              name="image2Input"
                              className="img_submit"
                              onChange={handleChange2}
                           />
                        </Form.Group>
                        {/* End Of image 2 container */}
                        {/* Image 3 Container */}
                        <Form.Group>
                           <Form.Label>Image 3: </Form.Label>
                           <Form.Control
                              type="file"
                              name="image3Input"
                              className="img_submit"
                              onChange={handleChange3}
                           />
                        </Form.Group>
                        {/* End of Image 3 container */}
                        {/* Video link COntainer */}
                        <Form.Group id="vidLink">
                           <Form.Label>Video Link:</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setVideo1(evt.target.value)}
                              placeholder="Enter Video Link"
                           />
                        </Form.Group>
                        {/* End of video link container */}
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
