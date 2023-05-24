import "../formcss/deleteConfirm.css"

function DeleteConfirm(props) {
   return (
      <div id="deleteConfirmContainer">

         <h4>Are you sure you want to delete:<br /> {props.showTitle} ?</h4>
         <div id="buttonBox">
            <button id='confirmDelete'
               onClick={() => props.confirmDelete()}
            >Delete</button>

            <button id='cancel'
               onClick={() => props.closeModal()}
            >Cancel</button>
         </div>
      </div>
   )
}

export default DeleteConfirm


