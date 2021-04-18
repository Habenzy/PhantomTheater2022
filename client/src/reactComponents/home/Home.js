//-----------------------Imports-----------------------------------
import React, { useState, useEffect } from "react";
import "./Home.css";
import { firestore } from '../firebase/firebase';
import { useHistory } from 'react-router-dom'
import placeholderImage from '../images/barn3crop.jpg'

//------ Homepage component function with currently playing as central image and next show -----------
function Home() {
  let [rightNow, setRightNow] = useState(new Date())
  let [allShows, setAllShows] = useState("")
  let [splashId, setSplashId] = useState("")
  let [splashImage, setSplashImage] = useState("")
  let [splashTitle, setSplashTitle] = useState("Shows coming Soon!")
  let [splashDates, setSplashDates] = useState([])
  let [splashShowNum, setSplashShowNum] = useState(0)
  let [nextId, setNextId] = useState("")
  let [nextImage, setNextImage] = useState("")
  let [nextTitle, setNextTitle] = useState("")
  let [nextDates, setNextDates] = useState([])
  let [nextShowNum, setNextShowNum] = useState(0)
  const history = useHistory()

  // print list of all shows
  async function getNowPlaying() {
    
    // get system date
    let today = rightNow;
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd + "T00:00";
  //  let date = today

    // get all data from shows collection
    const showsRef = firestore.collection('shows')
    // query for booked shows
    const showSnapshot = await showsRef.where('status', '==', 'Booked').get()
    // create array of all Booked shows
    const allShowsArray = showSnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    })

    const currentShows = allShowsArray

    currentShows.sort(function (a, b) {
      return new Date(a.dates[0]) - new Date(b.dates[0]);
    });

    setAllShows(currentShows)
    setSplashImage(placeholderImage)
    // console.log("today is: ", date)
    console.log("current shows: ", currentShows)

  }

  // if (!allShows) getNowPlaying()

  useEffect(() => {
    setRightNow(new Date())
    getNowPlaying()
    
  }, [])




  useEffect(() => {
    console.log("all shows: ", allShows)
    // do this if all shows.length >= 1
    if (allShows.length >= 1) {
      setSplashId(allShows[0].id)
      setSplashImage(allShows[0].imageLg)
      setSplashTitle(allShows[0].title)
      setSplashDates(allShows[0].dates)
      setSplashShowNum(allShows[0].dates.length)
    }

    if (allShows.length >= 2) {
      setNextId(allShows[1].id)
      setNextImage(allShows[1].imageLg)
      setNextTitle(allShows[1].title)
      setNextDates(allShows[1].dates)
      setNextShowNum(allShows[1].dates.length)
    }

    // return () => {
    //   cleanup
    // }
  }, [allShows])

  // console.log("splashDates is: ", splashDates[0])
  // console.log(allShows);


  // this function changes the date object into a readable string formatted for 12 hour display
  function changeDate(date) {
    let months = {
      "01": 'January',
      "02": 'February',
      "03": 'March',
      "04": 'April',
      "05": 'May',
      "06": 'June',
      "07": 'July',
      "08": 'August',
      "09": 'September',
      "10": 'October',
      "11": 'November',
      "12": 'December'
    }
    //------- changing the military time string to normal time
    let newTime;
    ///sepparating the string at the T.
    let dateFix = date.split("T");
    let startDate = dateFix[0];
    let month = startDate.split("-")[1];
    let day = startDate.split("-")[2];
    let endDate = months[month] + " " + day + '  -  ';
    /// targetting second item of the dateFix array (which is the time)
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
  function showSplashArtist() {
    history.push(`/Artist#${splashId}`)
  }
  function showNextArtist() {
    history.push(`/Artist#${nextId}`)
  }

  return (
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

      <div className="currentPlay">
        <div className="nowPlaying">

          <img className="homeImage" src={splashImage} alt="Now Showing" />

        </div>
        <div className="currentPlayText">

          <h2>{`${splashTitle}`}</h2>

          {/* change this to a .map function */}
          {splashShowNum === 0 ? <div>Showtimes coming soon.</div> : console.log()}
          {/* {splashShowNum >= 1 ? <br /> : console.log()} */}
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
          {splashId ? <button onClick={showSplashArtist}>- Artist Info -</button> : console.log()}

        </div>
      </div>

      {nextId ?
        <div className="whatNext">
          <div className="whatNextImg">
            <img id="nextImage" src={nextImage} alt={'show pic'} />
          </div>
          <div className="whatNextText">
            <h2>{`${nextTitle}`}</h2>
            {/* change this to a .map function */}
            {nextShowNum === 0 ? <div>Showtimes coming soon.</div> : console.log()}
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
            <button onClick={showNextArtist}>- Artist Info -</button> 
         </div>
        </div>
        : console.log()}
    </div>
  );
}

export default Home;
