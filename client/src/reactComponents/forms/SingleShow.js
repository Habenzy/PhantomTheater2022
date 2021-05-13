// ------ Imports ---
import React from "react";
import "../formcss/singleShow.css";

//  ---- Single show component functionality and export ----

export default function SingleShow(props) {
   let numberOfShows = props.dates.length;
   props.dates.sort()

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

      <div className="single_show">

       <div className='singleShowTitle'><h4>Title : {props.title}</h4></div>
         <h5>Status: {props.status}</h5>
         <span>Artist Link: <a className="dashLink" href={`http://localhost:3000/artistForm#${props.id}`}>
            {`http://localhost:3000/artistForm#${props.id}`}
         </a></span>
        
         <div className="singleShowLine"><p>Artist:  </p> {props.artist}</div>
         <div className="singleShowLine"><p>Show type: </p>{props.type}</div>
         <div className="singleShowLineSum"><p>Summary: </p>{props.blurb}</div>
         <div className="singleShowLine"><p>Show Dates:</p>
         {numberOfShows >= 1 ? changeDate(props.dates[0]) : console.log()}
         {numberOfShows >= 1 ? <br /> : console.log()}
         {numberOfShows >= 2 ? changeDate(props.dates[1]) : console.log()}
         {numberOfShows >= 2 ? <br /> : console.log()}
         {numberOfShows >= 3 ? changeDate(props.dates[2]) : console.log()}
         {numberOfShows >= 3 ? <br /> : console.log()}
         {numberOfShows >= 4 ? changeDate(props.dates[3]) : console.log()}
         {numberOfShows >= 4 ? <br /> : console.log()}
         {numberOfShows >= 5 ? changeDate(props.dates[4]) : console.log()}
         {numberOfShows >= 5 ? <br /> : console.log()}
         {numberOfShows >= 6 ? changeDate(props.dates[5]) : console.log()}
         {numberOfShows >= 6 ? <br /> : console.log()}
         </div>
         
         <br />
         <div className="buttons">
            <button
               id="btnDelete"
               className="show_button"
               onClick={() => props.deleteThisShow(props.id, props.title)}
            >-Delete-
            </button>

            <button
               id="btnEdit"
               className="show_button"
               onClick={() => props.editThisShow(props.id)}
            >- Edit -
            </button>
         </div>
         {/* <button id='btnAddDates' className="show_button" onClick={() => props.addDatesThisShow(props.id) }> add Dates</button> */}
         <div className="line"></div>
         <br />
      </div>
   );
}

