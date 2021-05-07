import React from 'react'
import "../formcss/singleProposal.css"


export default function SingleShow(props) {
   return (
      <div className="single_proposal">
         {/* don't forget to set this to phantomtheater.org/artistForm#${props.id} 
         and make sure the routing is all set up for new domain*/}
         <span>Artist Link: <a className="dashLink" href={`http://localhost:3000/artistForm#${props.id}`}>
            {`http://localhost:3000/artistForm#${props.id}`}
         </a></span>
    
       <h4> {props.title} </h4>
       <h5> { props.status }</h5>
         <p>Show Description:</p>
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
