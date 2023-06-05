//-----------------------Imports-----------------------------------
import React, { useState, useEffect } from "react";
import "./Home.css";
import { firestore } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import placeholderImage from "../images/barn3crop.jpg";

//------ Homepage component function with currently playing as central image and next show -----------
function Home() {
  let [rightNow, setRightNow] = useState(() => {
    // todays date in db format set in state
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    let formatToday = yyyy + "-" + mm + "-" + dd + "T00:00";
    return formatToday;
  });
  let [allShows, setAllShows] = useState("");
  let [splashId, setSplashId] = useState("");
  let [splashImage, setSplashImage] = useState("");
  let [splashTitle, setSplashTitle] = useState("Shows coming Soon!");
  let [splashDates, setSplashDates] = useState([]);
  let [splashShowNum, setSplashShowNum] = useState(0);
  let [nextId, setNextId] = useState("");
  let [nextImage, setNextImage] = useState("");
  let [nextTitle, setNextTitle] = useState("");
  let [nextDates, setNextDates] = useState([]);
  let [nextShowNum, setNextShowNum] = useState(0);
  const history = useHistory();

  async function archiveShows() {
    // find shows that have gone by or shows that are booked with no dates and send them to archive

    // get all data from shows collection
    const showsRef = firestore.collection("shows");
    // query for booked shows
    const showSnapshot = await showsRef.where("status", "==", "Booked").get();
    // create array of all Booked shows
    const allShowsArray = showSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    // iterate over booked shows and update status if it meets filter conditions
    allShowsArray.map((doc) => {
      // get last show date from date array

      let lastShow = doc.dates[doc.dates.length - 1];
      // filter for 'all shows have happened' or 'show has no dates
      // if above conditions are true then archive the show
      console.log(doc.title, ' ', lastShow, ' ', rightNow)
      if (lastShow < rightNow) {
        let statusUpdate = "Archive";
        updateDB(doc.id, statusUpdate);
      }
      // update function for show status in db
      async function updateDB(showId, showStatus) {
        await firestore
          .collection("shows")
          .doc(showId)
          .update({ status: showStatus });
      }
    });
  }

  // get all Booked shows
  async function getNowPlaying() {
    // get all data from shows collection
    const showsRef = firestore.collection("shows");
    // query for booked shows
    const showSnapshot = await showsRef.where("status", "==", "Booked").get();
    // create array of all Booked shows
    const allShowsArray = showSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log("shows fetched:")
    console.log(allShowsArray)
    const currentShows = allShowsArray;
    // Sort new array by date[0] soonest to latest
    currentShows.sort(function (a, b) {
      return new Date(a.dates[0]) - new Date(b.dates[0]);
    });
    // set sorted shows array in state
    setAllShows(currentShows);
    // set default image if no shows
    setSplashImage(placeholderImage);
  }

  // triggers at page load
  useEffect(() => {
    // archiveShows();
    getNowPlaying();
  }, []);

  // fires when AllShows changes and populates Splash and Next shows
  useEffect(() => {
    // do this if all shows.length >= 1
    console.log("all shows updated")
    console.log(allShows)
    if (allShows.length >= 1 && allShows[0].dates[allShows[0].dates.length - 1] > Date.now()) {
      console.log("one show")
      setSplashId(allShows[0].id);
      allShows[0].imageLg
        ? setSplashImage(allShows[0].imageLg)
        : setSplashImage(placeholderImage);
      setSplashTitle(allShows[0].title);
      setSplashDates(allShows[0].dates);
      setSplashShowNum(allShows[0].dates.length);
    }

    if (allShows.length >= 2 && allShows[0].dates[allShows[0].dates.length - 1] > Date.now()) {
      console.log("more than one show")
      setNextId(allShows[1].id);
      setNextImage(allShows[1].imageLg);
      setNextTitle(allShows[1].title);
      setNextDates(allShows[1].dates);
      setNextShowNum(allShows[1].dates.length);
    }
  }, [allShows]);

  // this function changes the date object into a readable string formatted for 12 hour display
  function changeDate(date) {
    let months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      10: "October",
      11: "November",
      12: "December",
    };
    //------- changing the military time string to normal time
    let newTime;
    ///separating the string at the T.
    let dateFix = date.split("T");
    let startDate = dateFix[0];
    let month = startDate.split("-")[1];
    let day = startDate.split("-")[2];
    let endDate = months[month] + " " + day + "  -  ";
    /// targeting second item of the dateFix array (which is the time)
    let time = dateFix[1];
    // hours is the first index item of the time array which was split at the :
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];
    // if hours are a higher number than 12 (milt time)
    // then subtract 12 to convert to normal time
    if (hours > 12) {
      newTime = hours - 12 + ":" + minutes + " PM";
    } else {
      // otherwise the time will just print the number if it is lower than 12
      newTime = hours + ":" + minutes + " AM";
    }
    let finalDate = endDate + " " + newTime;
    return finalDate;
  }

  // go to single artist display page by id
  // fired by Artist Info button
  function showSplashArtist() {
    history.push(`/Artist#${splashId}`);
  }
  function showNextArtist() {
    history.push(`/Artist#${nextId}`);
  }

  return (
    // This is the entire page container
    <div className="homeContainer">
      {/* Firefly Divs that draws to the page */}
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>

      {/* Main show container */}
      <div className="currentPlay">
        <div id="nowPlaying">
          <img id="homeImage" src={splashImage} alt="Now Showing" />
        </div>
        <div className="currentPlayText">
          <h2>{`${splashTitle}`}</h2>
          {/* FUTURE UPDATE: change this to a .map function */}
          {(allShows.length >= 1 && splashShowNum === 0) ? (
            <div>Showtimes coming soon.</div>
          ) : (
            console.log("showtimes coming soon...")
          )}
          {splashShowNum >= 1 ? changeDate(splashDates[0]) : console.log()}
          {splashShowNum >= 2 ? <br /> : console.log()}
          {splashShowNum >= 2 ? changeDate(splashDates[1]) : console.log()}
          {splashShowNum >= 3 ? <br /> : console.log()}
          {splashShowNum >= 3 ? changeDate(splashDates[2]) : console.log()}
          {splashShowNum >= 4 ? <br /> : console.log()}
          {splashShowNum >= 4 ? changeDate(splashDates[3]) : console.log()}
          {splashShowNum >= 5 ? <br /> : console.log()}
          {splashShowNum >= 5 ? changeDate(splashDates[4]) : console.log()}
          {splashShowNum >= 6 ? <br /> : console.log()}
          {splashShowNum >= 6 ? changeDate(splashDates[5]) : console.log()}
          <br />
          {/* Artist Info button */}
          {splashId ? (
            <button onClick={showSplashArtist}>- Artist Info -</button>
          ) : (
            console.log()
          )}
        </div>
      </div>

      {/* This is a MONSTER Bob Stauss style ternary that fires only if there is a next show */}
      {nextId ? (
        // Next show container
        <div className="whatNext">
          <div className="whatNextImg">
            <img id="nextImage" src={nextImage} alt={"show pic"} />
          </div>
          <div className="whatNextText">
            <h2>{`${nextTitle}`}</h2>
            {/* FUTURE UPDATE: change this to a .map function */}
            {nextShowNum === 0 ? (
              <div>See you next season!</div>
            ) : (
              console.log()
            )}
            {nextShowNum >= 1 ? changeDate(nextDates[0]) : console.log()}
            {nextShowNum >= 2 ? <br /> : console.log()}
            {nextShowNum >= 2 ? changeDate(nextDates[1]) : console.log()}
            {nextShowNum >= 3 ? <br /> : console.log()}
            {nextShowNum >= 3 ? changeDate(nextDates[2]) : console.log()}
            {nextShowNum >= 4 ? <br /> : console.log()}
            {nextShowNum >= 4 ? changeDate(nextDates[3]) : console.log()}
            {nextShowNum >= 5 ? <br /> : console.log()}
            {nextShowNum >= 5 ? changeDate(nextDates[4]) : console.log()}
            {nextShowNum >= 6 ? <br /> : console.log()}
            {nextShowNum >= 6 ? changeDate(nextDates[5]) : console.log()}
            <br />
            {/* Artist Info button */}
            <button onClick={showNextArtist}>- Artist Info -</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
