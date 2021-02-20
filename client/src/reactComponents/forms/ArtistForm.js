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
   let [imageLgName, setImageLgName] = useState("")
   let [image1, setImage1] = useState("");
   let [image1Name, setImage1Name] = useState("");
   let [image2, setImage2] = useState("");
   let [image2Name, setImage2Name] = useState("");
   let [image3, setImage3] = useState("");
   let [image3Name, setImage3Name] = useState("");


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
         showInData.imageLgName ? setImageLgName(showInData.imageLgName) : setImageLgName("")
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image1Name ? setImage1Name(showInData.image1Name) : setImage1Name("")
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image2Name ? setImage2Name(showInData.image2Name) : setImage2Name("")
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");
         showInData.image3Name ? setImage3Name(showInData.image3Name) : setImage3Name("")

         showInData.video1 ? setVideo1(showInData.video1) : setVideo1("");
         showInData.link1 ? setLink1(showInData.link1) : setLink1("");
         showInData.link2 ? setLink2(showInData.link2) : setLink2("");

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
         video1: video1,
         link1: link1,
         link2: link2,
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
                           <Form.File
                              className="img_submit"
                              label={imageLgName ? "Splash Image: " + imageLgName : "Please choose a Splash Image"}
                              name="imageLgIn"
                              onChange={handleImageLg}
                           />
                        </Form.Group>

                        {/* Image 1 Container */}
                        <Form.Group>
                           <Form.File
                              className="img_submit"
                              label={image1Name ? "Image 1: " + image1Name : "Please choose Image 1"}
                              name="image1In"
                              onChange={handleImage1}
                           />
                        </Form.Group>
                     
                        {/* Image 2 Container */}
                        <Form.Group>
                           <Form.File
                              className="img_submit"
                              label={image2Name ? "Image 2: " + image2Name : "Please choose Image 2"}
                              name="image2In"
                              onChange={handleImage2}
                           />
                        </Form.Group>
                   
                        {/* Image 3 Container */}
                        <Form.Group>
                           <Form.File
                              className="img_submit"
                              label={image3Name ? "Image 3: " + image3Name : "Please choose Image 3"}
                              name="image3In"
                              onChange={handleImage3}
                           />
                        </Form.Group>
                       
                        {/* Video link COntainer */}
                        <Form.Group id="vidLink">
                           <Form.Label>Video Link: { video1 ? video1 : "Please choose a video link"}</Form.Label>
                           <Form.Control
                              type="url"
                              name="vidInput"
                              onChange={(evt) => setVideo1(evt.target.value)}
                              placeholder="Choose Video Link"
                             
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
