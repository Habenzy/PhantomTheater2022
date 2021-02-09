//-----------------------------Imports---------------------------------------------------------------
import React, { useState } from "react";
// import Image from "../images/barn3.jpeg";
// import ImageH from "../images/barn3crop.jpg"
// import Image2 from "../images/SarahRose.jpg";
import "./Home.css";
import { firestore } from '../firebase/firebase';
// import { storage } from '../firebase/firebase';


// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}



//------ Homepage component function with currently playing as central image and next show -----------
function Home() {

   let [allShows, setAllShows] = useState("")
   // let [currentShow1, setCurrentShow1] = useState("")
   // let [currentShow2, setCurrentShow2] = useState("")
   let [splashImage, setSplashImage] = useState("")
   let [splashTitle, setSplashTitle] = useState("")
   let [splashDates, setSplashDates] = useState([])
   let [splashShowNum, setSplashShowNum] = useState(0)
   let [nextImage, setNextImage] = useState("")
   let [nextTitle, setNextTitle] = useState("")
   let [nextDates, setNextDates] = useState([])
   let [nextShowNum, setNextShowNum] = useState(0)


   // print list of all shows
   async function seeAllShows() {
      // get system date
      let date = "2020-08-01T00:00"
      // get all data from shows collection
      const showsRef = firestore.collection('shows')
      const showSnapshot = await showsRef.where('status', '==', 'Booked').get()
      // create array of all Booked shows
      const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)

      let currentShows = allShowsArray.filter(show => show.dates >= date)
      currentShows.sort(function (a, b) {
         return new Date(a.dates[0]) - new Date(b.dates[0]);
      });

      if (!allShows) {
         setAllShows(currentShows)
      }

      loadHomePage(currentShows)
   }

   async function loadHomePage(currentShows) {
  
      setSplashImage(currentShows[0].imageLg)
      setSplashTitle(currentShows[0].title)
      setSplashDates(currentShows[0].dates)
      setSplashShowNum(currentShows[0].dates.length)
      setNextImage(currentShows[1].imageLg)
      setNextTitle(currentShows[1].title)
      setNextDates(currentShows[1].dates)
      setNextShowNum(currentShows[1].dates.length)
   }

   seeAllShows()
   function changeDate(date) {
      //------- changing the military time string to normal tim

      let newTime;
      ///sepparating the string at the T.
      let dateFix = date.split("T");


      // console.log(dateFix);
      let startDate = dateFix[0];
      let year = startDate.split("-")[0];
      let month = startDate.split("-")[1];
      let day = startDate.split("-")[2];

      let endDate = month + "/" + day + "/" + year;
      // console.log(endDate);

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
         newTime = hours + ":" + minutes;
      }

      let finalDate = endDate + " " + newTime;

      return finalDate;
   }

   return (
      <div className="homeContainer">
         <div className="currentPlay">
            <div className="imageDiv">

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
               <img className="homeImage" src={splashImage} alt="Now Showing" />
            </div>
            <div className="currentPlayText">

               {/* <h1>Website Under Construction</h1>
               <h3>See you next Summer !</h3> */}
               <h2>{`${splashTitle}`}</h2>
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

               {/* <p>{`${splashDates}`}</p> */}
               {/* <p>07/25/2020</p> */}
            </div>
         </div>

         <div className="whatNext">
            <div className="whatNextImg">
               <img id="nextImage" src={nextImage} alt={'show pic'} />
            </div>
            <div className="whatNextText">
               <h2>{`${nextTitle}`}</h2>
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
               {/* <p>{`${nextDates[0]}`}</p> */}
            </div>
         </div>
      </div>
   );
}

export default Home;
