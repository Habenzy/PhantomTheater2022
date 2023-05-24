// ---------------------Imports --------------------------
import React, { useState } from "react";
import ArtistEvent from "../forms/ArtistEvent";
import { firestore } from "../firebase/firebase";
import "./Artist.css";

export default function Artist() {
  let [artist, setArtist] = useState("");
  let [bio, setBio] = useState("");
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [email, setEmail] = useState("");
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
      showInData.email ? setEmail(showInData.email) : setEmail("");
      showInData.bio ? setBio(showInData.bio) : setBio("");
      showInData.image1 ? setImage1(showInData.image1) : setImage1("");
      showInData.image2 ? setImage2(showInData.image2) : setImage2("");
      showInData.image3 ? setImage3(showInData.image3) : setImage3("");

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
  getOneShow();

  return (
    <div className="artistsContainer">
      <h1>Artists</h1>

      <ArtistEvent
        artist={artist}
        image1={image1}
        image2={image2}
        image3={image3}
        bio={bio}
        email={email}
        website={artistWebsite}
        facebook={artistFacebook}
        youtube={artistYouTube}
        instagram={artistInstagram}
        spotify={artistSpotify}
      ></ArtistEvent>
    </div>
  );
}
