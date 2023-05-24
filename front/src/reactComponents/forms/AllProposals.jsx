import { useState } from 'react'
import { firestore } from '../firebase/firebase'

import { useHistory } from 'react-router-dom'
import SingleProposal from './SingleProposal'
import DeleteConfirm from './DeleteConfirm'

// repetitive code that gets all ids and documents in a collection for .map
const collectAllIdsAndDocs = doc => {
   return { id: doc.id, ...doc.data() }
}

export default function AllProposals() {

   let [allProposals, setAllProposals] = useState(null)
   const [modal, setModal] = useState("false")
   const [showTitle, setShowTitle] = useState("")
   const [showId, setShowId] = useState("")
   const history = useHistory()

   async function seeAllProposals() {
      // get all data from shows collection
      const proposalRef = firestore.collection('shows')
      const proposalSnapshot = await proposalRef.where('status', '==', 'Proposal').get()

      // create array of all proposals
      const allProposalsArray = proposalSnapshot.docs.map(collectAllIdsAndDocs)
      if (!allProposals) {
         console.log('allProposalsArray = ', allProposalsArray)
         setAllProposals(allProposalsArray)
      }
   }
   seeAllProposals()

//delete function
   async function handleDelete(id, title) {
      console.log('delete function fired', id, title)
      setModal("true")
      setShowTitle(title)
      setShowId(id)
      console.log('delete function complete', id, title)
   }

   async function deleteProposal() {
      console.log("Delete proposal Fired", showId)
      const allShowsIn = allProposals
      await firestore.doc(`shows/${showId}`).delete()
      const newShowsIn = allShowsIn.filter(show => show.id !== showId)
      setAllProposals(newShowsIn)
      setModal('false')
   }

   async function handleClose() {
      setModal('false')
   }

//edit function
   async function handleEdit(id) {
      console.log('Edit function fired', id)
      history.push(`/EditShow#${id}`)
   }

   
   return (
      <div>
         { allProposals ? allProposals.map(proposal => {
            return <SingleProposal
               key={proposal.id}
               deleteThisShow={handleDelete}
               editThisShow={handleEdit}
               id={proposal.id}
                title={`Title : ${proposal.title}`}
              artist={`Artist: ${proposal.artist}`}
              status={`Status: ${proposal.status}`}
               contactName={proposal.contactName}
               phone={`Phone: ${proposal.phone}`}
               email={`Email:  ${proposal.email}`}
               description={proposal.description}
            ></SingleProposal>
         }) : 'Loading'
         }
         <div id='modal' style={{ visibility: modal === 'true' ? 'visible' : 'hidden' }} >
           
            <DeleteConfirm
               closeModal={handleClose}
               showTitle={showTitle}
               confirmDelete={deleteProposal}

            />
         </div>
      </div>
   )
}
