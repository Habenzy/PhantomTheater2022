import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";
// get the database

import AllShows from "./AllShows";
import AllProposals from "./AllProposals";
import AddShow from "./AddShow";
import ShowArchive from "./ShowArchive";
import "../formcss/dashBoard.css";

function Dashboard() {
  const [toggle, setToggle] = useState("");
  //custom hook that has access to user (from AuthContext.js)
  const { loggedUser, logout } = useAuth();
  const history = useHistory();

  //logout function
  function handleLogout() {
    logout();
    history.push("/login");
  }

  //----------toggle options----------//
  function editShow() {
    setToggle("shows");
  }

  function editProposal() {
    setToggle("proposals");
  }

  function addShow() {
    setToggle("add");
  }

  function archive() {
    setToggle("archive");
  }
  //----------------------------------//

  return (
    <div className="dash-container">
      <Button
        id="dash_button"
        onClick={handleLogout}
        style={{ marginLeft: "90%" }}
      >
        Log Out
      </Button>
      <div className="dash_board">
        <h2>Admin Dashboard</h2>
        {/* <h4 className="mb-4">Welcome, {loggedUser.email}</h4> */}
        <div className="dash_buttons">
          <div className="upper">
            <Button
              className="dash_button"
              id="proposalButton"
              onClick={editProposal}
              type="submit"
            >
              Proposals
            </Button>

            <Button
              className="dash_button"
              id="showsButton"
              onClick={editShow}
              type="submit"
            >
              Shows
            </Button>

            <Button
              className="dash_button"
              id="addShowButton"
              onClick={addShow}
              type="submit"
            >
              Add a Show
            </Button>

            <Button
              className="dash_button"
              id="archiveShowButton"
              onClick={archive}
              type="submit"
            >
              Show Archive
            </Button>
          </div>
          <div className="line"></div>
          <div>
            {toggle === "add" ? (
              <AddShow editProposal={editProposal} />
            ) : toggle === "shows" ? (
              <AllShows />
            ) : toggle === "proposals" ? (
              <AllProposals />
            ) : toggle === "archive" ? (
              <ShowArchive />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
