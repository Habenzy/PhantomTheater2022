// ---------------------Imports --------------------------
import React, { useState } from "react";
import "./Artist.css";
import { firestore } from "../firebase/firebase";
import ArtistEvent from '../forms/ArtistEvent'
import '../artist/Artist.css'



export default function Artist() {

   let [thisShow, setThisShow] = useState("");
   let [artist, setArtist] = useState("");
   let [bio, setBio] = useState("");
   let [image1, setImage1] = useState("");
 
   let [image2, setImage2] = useState("");
  
   let [image3, setImage3] = useState("");
 
   // let [artistWebsite, setArtistWebsite] = useState("");
   // let [artistFacebook, setArtistFacebook] = useState("");
   // let [artistYouTube, setArtistYouTube] = useState("");
   // let [artistInstagram, setArtistInstagram] = useState("");
   // let [artistSpotify, setArtistSpotify] = useState("");


  
   async function getOneShow() {
      let id = document.location.hash.substring(1);
      const showRef = await firestore.collection("shows").doc(id);
      const showIn = await showRef.get();
      if (!showIn.exists) {
         alert("no such document", id);
      } else {
         let showInData = showIn.data();

         setThisShow(showInData);

         showInData.artist ? setArtist(showInData.artist) : setArtist("");
         showInData.bio ? setBio(showInData.bio) : setBio("");
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");
      }
      console.log(thisShow)
   }
  getOneShow()
  
   
   return (
      <div className="artistsContainer">
         
         <br />
         <h3>{artist}</h3>
         <br />
         <p>{bio}</p>

         <div className="artistImageContainer">
            <img src={image1} alt="artist-1"></img>
            <br />
            <img src={image2} alt="artist-2"></img>
            <br />
            <img src={image3} alt="artist-3"></img>
         </div>

         <div className="textContainer">
           
            <div className="artistContact">
           

             
               <br />
            </div>
         </div>
         <div className="line"></div>

         
      </div>
   )
}
