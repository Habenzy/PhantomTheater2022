import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";
// get the database

import AllShows from "./AllShows";
import AllProposals from "./AllProposals";
import AddShow from "./AddShow";
import "../formcss/dashBoard.css";

function Dashboard() {
  const [toggle, setToggle] = useState("shows");
  const { loggedUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push("/login");
  }

  function editShow() {
    setToggle("shows");
  }

  function editProposal() {
    setToggle("proposals");
  }

  function addShow() {
    setToggle("add");
  }

  return (
    <div>
      <Button
        id="dash_button"
        onClick={handleLogout}
        style={{ marginLeft: "90%" }}
      >
        Log Out
      </Button>
      <div className="dash_board">
        <h2>Admin Dashboard</h2>
        {/* <h4 className="mb-5">Welcome, {loggedUser.email}</h4> */}
        <div className="dash_buttons">
          <div className="upper">
            <Button id="dash_button" onClick={editProposal} type="submit">
              Proposals
            </Button>

            <Button id="dash_button" onClick={editShow} type="submit">
              Shows
            </Button>

            <Button id="dash_button" onClick={addShow} type="submit">
              Add a Show
            </Button>
          </div>
          <div className="line"></div>
          <div>
            {toggle === "add" ? (
              <AddShow />
            ) : toggle === "shows" ? (
              <AllShows />
            ) : (
              <AllProposals />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
