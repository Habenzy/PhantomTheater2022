// ---------------------Imports --------------------------
import React, { useState } from "react";
import { firestore } from "../firebase/firebase";
import ArtistEvent from '../forms/ArtistEvent'
import './Artist.css'


const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() }
}

// ------- Season function with calendar and show titles and dates
//----------------Artist component function ----------------

function Artist() {
  let [allArtists, setAllArtists] = useState(null)

  async function seeAllArtists() {
    const artistsRef = firestore.collection('shows')
    const artistSnapshot = await artistsRef.where('status', '!=', 'Proposal').get()

    const allArtistsArray = artistSnapshot.docs.map(collectAllIdsAndDocs)
    if (!allArtists) {
     
      setAllArtists(allArtistsArray)
    }
  }

  seeAllArtists()

   
  return (
    <div className="artistsContainer">
      <h1>Artists</h1>
      { allArtists ? allArtists.map(show => {
        return <ArtistEvent

          key={show.id}
          id={show.id}
          artist={show.artist}
          image1={show.image1}
          image2={show.image2}
          image3={show.image3}

          bio={show.bio}
          email={show.email}
          link1={show.link1}
          link2={show.link2}
        ></ArtistEvent >
      }) : 'loading'

      }
    </div >
  );
}

//------export the component---------
export default Artist;
