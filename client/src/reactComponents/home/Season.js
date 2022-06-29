// ----------------Imports -----------------------
import React, { useState, useEffect } from "react";
import "./Season.css";
import { firestore } from "../firebase/firebase";
import SeasonEvent from '../forms/SeasonEvent';

const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};


// ------- Season function with calendar and show titles and dates
function Season() {

  let [allShows, setAllShows] = useState(null)


  async function seeAllShows() {

    const showsRef = firestore.collection('shows')
    const showSnapshot = await showsRef.where('status', '==', 'Booked').get()
    const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
    if (!allShows) {
      setAllShows(allShowsArray)
    }
   }

  useEffect(() => {
    seeAllShows()
  }, [])
  
  if (allShows) { allShows.sort((a, b) => (a.dates[0] > b.dates[0]) ? 1 : -1)}


  return (
    
    <div className="season_container">
      <h1>Season 2022</h1>
      { allShows ?
        
        allShows.map(show => {
        return <SeasonEvent
          key={show.id}
          id={show.id}
          title={show.title}
          dates={show.dates}
          type={show.type}
          artist={show.artist}
          blurb={show.blurb}
          imageLg={show.imageLg}

        ></SeasonEvent>

      }) : 'loading'

      }

    </div>
  );
}

//------export the component---------
export default Season;


