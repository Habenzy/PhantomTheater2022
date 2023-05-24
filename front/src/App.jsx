//------------Imports -----------

import "./App.css";
import Nav from "./reactComponents/home/Nav";
import Home from "./reactComponents/home/Home";
import Footer from "./reactComponents/home/Footer";
import About from "./reactComponents/home/About";
import Artist from "./reactComponents/home/Artist";
import AllArtist from "./reactComponents/home/AllArtist";
import Season from "./reactComponents/home/Season";
import Donate from "./reactComponents/home/Donate";
import Burger from "./reactComponents/home/Burger";
import AddShow from "./reactComponents/forms/AddShow";
import AllShows from "./reactComponents/forms/AllShows";
import Login from "./reactComponents/forms/Login";
import ForgotPassword from "./reactComponents/forms/ForgotPassword";
import ArtistForm from "./reactComponents/forms/ArtistForm";
import ProposalForm from "./reactComponents/forms/ProposalForm";
import EditShow from "./reactComponents/forms/EditShow";
import PrivateRoute from "./reactComponents/forms/PrivateRoute";
import { AuthProvider } from "./reactComponents/forms/AuthContext";
import Dashboard from "./reactComponents/forms/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Burger />
        <Nav />
        <AuthProvider>
          <Routes>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/adminDash" component={Dashboard} />
            <PrivateRoute path="/editShow" component={EditShow} />
            <PrivateRoute path="/addShow" component={AddShow} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/proposalForm" component={ProposalForm} />
            <Route path="/artistForm" component={ArtistForm} />
            <Route path="/allShows" component={AllShows} />
            <Route path="/Season" component={Season} />
            <Route path="/About" component={About} />
            <Route path="/Artist" component={Artist} />
            <Route path="/AllArtist" component={AllArtist} />
            <Route path="/Donate" component={Donate} />
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

//------export the component---------
export default App;
