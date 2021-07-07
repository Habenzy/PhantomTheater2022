//------- Imports -------
import React from "react";
import "../formcss/seasonEvent.css";

// -------- Season event component functionality and export

function SeasonEvent(props) {
  let showImage = (
    <img src={props.imageLg} alt="" />
  );
  let numberOfShows = props.dates.length;


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

  return (
    <div className="season_container">
      <h3> {props.title} </h3>
      <br />
      {showImage}
      <br />
      <p className="artist">
      {props.artist}
      </p>
      <p className="blurb">{props.blurb}</p>
      <br />
      
      {numberOfShows >= 1 ? <p className="date">{changeDate(props.dates[0])}</p> : console.log()}
      {numberOfShows >= 2 ? <p className="date">{changeDate(props.dates[1])}</p> : console.log()}
      {numberOfShows >= 3 ? <p className="date">{changeDate(props.dates[2])}</p> : console.log()}
      {numberOfShows >= 4 ? <p className="date">{changeDate(props.dates[3])}</p> : console.log()}
      {numberOfShows >= 5 ? <p className="date">{changeDate(props.dates[4])}</p> : console.log()}
      {numberOfShows >= 6 ? <p className="date">{changeDate(props.dates[5])}</p> : console.log()}

       <div className="line"></div>
    </div>
  );
}

export default SeasonEvent;
