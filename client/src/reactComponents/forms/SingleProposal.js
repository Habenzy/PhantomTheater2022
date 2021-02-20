import React from 'react'
import "../formcss/singleProposal.css"


export default function SingleShow(props) {
   return (
      <div className="single_proposal">
         {/* don't forget to set this to phantomtheater.org/artistForm#${props.id} 
         and make sure the routing is all set up for new domain*/}
         <a href={`http://localhost:3000/artistForm#${props.id}`}>
            {`Artist Link: http://localhost:3000/artistForm#${props.id}`}
         </a>
         <h4> {props.title} </h4>
         <p>Show Description:</p>
         {/* <br /> */}
         <h5>   {props.description} </h5>
         {props.artist}
         <br />
         {props.phone}
         <br />
         {props.email}
         <br />
         <div className='butttons'>
            <button
               id='btnDelete' className="proposal_button"
               onClick={() => props.deleteThisShow(props.id, props.title)}
            >-Delete-
            </button>

            <button id='btnEdit' className="proposal_button"
               onClick={() => props.editThisShow(props.id)}
            >- Edit -
            </button>

         </div>
         <div className="line"></div>
         <br />

      </div>
   )
}
