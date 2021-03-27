// ---------------------Imports --------------------------
import React, { useState } from "react";
import "./Artist.css";
import { firestore } from "../firebase/firebase";

import '../HOME_NEW/Artist.css'



export default function Artist() {


   let [artist, setArtist] = useState("");
   let [bio, setBio] = useState("");
   let [image1, setImage1] = useState("");

   let [image2, setImage2] = useState("");

   let [image3, setImage3] = useState("");

   let [artistWebsite, setArtistWebsite] = useState("");
   let [artistFacebook, setArtistFacebook] = useState("");
   let [artistYouTube, setArtistYouTube] = useState("");
   let [artistInstagram, setArtistInstagram] = useState("");
   let [artistSpotify, setArtistSpotify] = useState("");



   async function getOneShow() {
      let id = document.location.hash.substring(1);
      const showRef = await firestore.collection("shows").doc(id);
      const showIn = await showRef.get();
      if (!showIn.exists) {
         alert("no such document", id);
      } else {
         let showInData = showIn.data();

         showInData.artist ? setArtist(showInData.artist) : setArtist("");
         showInData.bio ? setBio(showInData.bio) : setBio("");
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");


         showInData.artistWebsite ? setArtistWebsite(showInData.artistWebsite) : setArtistWebsite("");
         showInData.artistFacebook ? setArtistFacebook(showInData.artistFacebook) : setArtistFacebook("");
         showInData.artistYouTube ? setArtistYouTube(showInData.artistYouTube) : setArtistYouTube("");
         showInData.artistInstagram ? setArtistInstagram(showInData.artistInstagram) : setArtistInstagram("");
         showInData.artistSpotify ? setArtistSpotify(showInData.artistSpotify) : setArtistSpotify("");
      }

   }
   getOneShow()


   return (
      <div className="artistsContainer">

         <br />
         <h2>{artist}</h2>
         <br />
         <div>{bio}</div>
         <br />

         <div className="artistImageContainer">
            <img src={image1} alt=""></img>

            {image2 ? <img src={image2} alt=""></img> : 'Loading'}

            <img src={image3} alt=""></img>
         </div>

         <div className="textContainer">

            <div className="artistContact">
               {artistWebsite ? <span>Website: {artistWebsite}</span> : console.log()  }
               {artistFacebook ? <span>FaceBook: {artistFacebook}</span> : console.log()  }
               {artistYouTube ? <span>YouTube: {artistYouTube}</span> : console.log()  }
               {artistInstagram ? <span>Instagram: {artistInstagram}</span> : console.log()  }
               {artistSpotify ? <span>Spotify: {artistSpotify}</span> : console.log()  }



            </div>
         </div>
         <div className="line"></div>


      </div>
   )
}
