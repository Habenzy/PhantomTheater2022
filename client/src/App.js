//------------Imports -----------
import "./App.css";
import Nav from "./reactComponents/HOME_NEW/Nav";
import Home from "./reactComponents/HOME_NEW/Home";
import Footer from "./reactComponents/HOME_NEW/Footer";
import About from "./reactComponents/HOME_NEW/About";
import Artist from "./reactComponents/HOME_NEW/Artist";
import AllArtist from "./reactComponents/HOME_NEW/AllArtist"
import Reserve from "./reactComponents/HOME_NEW/Reserve";
import Season from "./reactComponents/HOME_NEW/Season";
import Burger from "./reactComponents/HOME_NEW/Burger.js";
import AddShow from "./reactComponents/forms/AddShow";
import AllShows from "./reactComponents/forms/AllShows";
import Login from "./reactComponents/forms/Login";
import ArtistForm from "./reactComponents/forms/ArtistForm";
import ProposalForm from "./reactComponents/forms/ProposalForm";
import EditShow from "./reactComponents/forms/EditShow";
import { AuthProvider } from "./reactComponents/forms/AuthContext";
// import PrivateRoute from "../src/reactComponents/forms/PrivateRoute";

import Dashboard from "./reactComponents/forms/Dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Function containing the route paths  to all components
function App() {
  return (
    <Router>
      <div className="App">
        <Burger />
        <Nav />
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home />
              {/* <CurrentShow /> */}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/adminDash" component={Dashboard} />
            <Route path="/proposalForm" component={ProposalForm} />
            <Route path="/editShow" component={EditShow} />
            <Route path="/addShow" component={AddShow} />
            <Route path="/artistForm" component={ArtistForm} />
            <Route path="/allShows" component={AllShows} />
            <Route path="/Season" component={Season} />
            <Route path="/About" component={About} />
                 <Route path="/Artist" component={Artist} />
                 <Route path="/AllArtist" component={AllArtist} />
            <Route path="/Reserve" component={Reserve} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

//------export the component---------
export default App;
