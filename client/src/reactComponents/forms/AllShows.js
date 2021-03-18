import React, { useState } from 'react';
// get the database
import { firestore } from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import SingleShow from './SingleShow'
import { useHistory } from 'react-router-dom'
import DeleteConfirm from './DeleteConfirm'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}

function AllShows() {

   let [allShows, setAllShows] = useState(null)
   const [modal, setModal] = useState("false")
   const [showTitle, setShowTitle] = useState("")
   const [showId, setShowId] = useState("")
   const history = useHistory()

   // print list of all shows
   async function seeAllShows() {
      // get all data from shows collection
      const showsRef = firestore.collection('shows')
      const showSnapshot = await showsRef.where('status', '==', 'Booked').get()

      // create array of all shows
      const allShowsArray = showSnapshot.docs.map(collectAllIdsAndDocs)
      if (!allShows) {
       //  console.log('allShowsArray = ', allShowsArray)
         setAllShows(allShowsArray)
      }
   }
   seeAllShows()


   

   async function handleDelete(id, title) {
      console.log('delete function fired', id, title)
      setModal("true")
      setShowTitle(title)
      setShowId(id)
      console.log('delete function complete', id, title)
   }

   async function deleteShow() {
      console.log("Delete show Fired", showId)
      const allShowsIn = allShows
      await firestore.doc(`shows/${showId}`).delete()
      const newShowsIn = allShowsIn.filter(show => show.id !== showId)
      setAllShows(newShowsIn)
      setModal('false')
   }

   async function handleEdit(id) {
      console.log('Edit function fired', id)
      history.push(`/EditShow#${id}`)
   }

   async function handleClose() {

      setModal('false')
   }


   return (
      <div>
         { allShows ? allShows.map(show => {

            return <SingleShow
               key={show.id}
               deleteThisShow={handleDelete}
               editThisShow={handleEdit}
               id={show.id}
               title={`Title : ${show.title}`}
               dates={show.dates}
               type={`Show type : ${show.type}`}
               blurb={`Summary : ${show.blurb}`}
               artist={`Artist : ${show.artist}`}

            ></SingleShow>
         }) : 'Loading'
         }

         <div id='modal' style={{ visibility: modal === 'true' ? 'visible' : 'hidden' }} >
           
            <DeleteConfirm
               closeModal={handleClose}
               showTitle={showTitle}
               confirmDelete={deleteShow}
               
            />
         </div>

      </div >
   )
}

export default AllShows