import React from 'react'
import '../home/Artist.css'
import websiteIcon from "../images/internet.png";
import facebookIcon from "../images/facebookb.png";
import youtubeIcon from "../images/youtube.png";
import instagramIcon from "../images/instagramColor.png"
import spotifyIcon from "../images/spotify.png"


function ArtistEvent(props) {
  
  return (
    <div className="artistsContainer">
      <h3>{props.artist}</h3>

      <div className="artistImageContainer">
        {props.image1 ? <img src={props.image1} alt="" /> : ""}
        {props.image2 ? <img src={props.image2} alt="" /> : ""}
        {props.image3 ? <img src={props.image3} alt="" /> : ""}
      </div>

      <div className="textContainer">
        <p>{props.bio}</p>
        <h5> {props.email}</h5>
        <div className="artistContact">
          {props.website ? <a href={props.website}><img src={websiteIcon} alt="" style={{ width: "50px" }} ></img></a> : ""}
          {props.facebook ? <a href={props.facebook}><img src={facebookIcon} alt="" style={{ width: "50px" }} ></img></a> : ""}
          {props.youtube ? <a href={props.youtube}><img src={youtubeIcon} alt="" style={{ width: "50px" }} ></img></a> : ""}
          {props.instagram ? <a href={props.instagram}><img src={instagramIcon} alt="" style={{ width: "50px" }} ></img></a> : ""}
          {props.spotify ? <a href={props.spotify}><img src={spotifyIcon} alt="" style={{ width: "50px" }} ></img></a> : ""}
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default ArtistEvent
