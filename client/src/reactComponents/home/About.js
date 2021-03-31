//-------------------------------------Imports--------------------------
import React from "react";
import Masks from "../images/barn4.jpg";
import Map from "../images/map.png";
import "./About.css";

//------About Page component function containing Phantom Theater information
// and sponsor list. -----------------------------------------------------------
function About() {
   return (
      <div className="about">
         <div className="aboutWrapper">
            <h1>About Us</h1>
            <h3 id="about_us">SOMETIMES FUNKY, OCCASIONALLY SHOCKING,
ALWAYS ENTERTAINING, NOT TO BE MISSED!</h3>
            <div>
               <div className="aboutImgDiv1">
                  <img className="aboutImage1" src={Masks} alt="" />
               </div>
               <br />
          Phantom Theater was created in Warren, Vermont in 1985. Since its
          inception, Phantom has brought professional theater artists from
          Vermont as well as many cities throughout the country to act, direct,
          dance, teach workshops, and compose and play music. Phantom’s mission
          is to explore and experiment with theatrical, musical, and
          dance/movement ideas by supporting the authentic vision of each artist
          or student. The theater presents original works of art, serving as
          both a venue for polished performances and a laboratory for the
          development of new pieces.
          </div>
            <br />
            <h4 className="barn">THE EDGCOMB BARN</h4>
            Direct from a Sears
            Roebuck catalog kit, the historic Edgcomb Barn is Phantom Theater's
            home. A space at once intimate and gracious, it brings the flavor of Vermont to all of our productions. (The occasional cat or bat has been known to steal a scene.) The surrounding grounds make an excellent place for a pre-show picnic.
          


            <h4>BOARD OF DIRECTORS</h4>

            <div className="board">Beth Binns Schoellkopf<br /> Laura Brines<br /> Dan Eckstein <br /> Janet Hubbard-Brown <br />Dana Jinkins <br />Sheryl Kurland-Platt<br />Lexi Leacock <br /> Tracy Martin<br />  Mary Moffroid<br />  Sucosh Norton<br />  Julia Purinton<br /> Jim Sanford<br />  Kate Youngdahl</div>


            <div className="line"></div>
         </div>

         <div className="contactWrapper">
            <h1>Contact Us</h1>
            <div>
               <div className="aboutImgDiv2">
                  <img className="aboutImage2" src={Map} alt="" />
               </div>
               <br />
          PHANTOM
          THEATER IS LOCATED AT THE CORNER OF AIRPORT and DUMP ROADS IN WARREN,
          VERMONT. Please respect our neighbors' wishes and access Phantom
          Theater from East Warren Road.
          <br /><br />
          PHANTOM THEATER
          <br />BOX 416 WARREN, VT 05674
          <br />(802) 496-5997
          <br />
            </div>
            <div className="line"></div>
         </div>

         <div className="sponsorsWrapper">
            <h1>Sponsors</h1>
            <p className="thankYou">PHANTOM THEATER IS PROUD TO COUNT MANY LOCAL BUSINESSES AND INDIVIDUALS AS FRIENDS
            AND SUPPORTERS.
            THANK YOU TO ALL OUR SPONSORS!</p>
            <br />
            <div className="sponsorsList">
               About Being
          <br />
          American Flatbread
          <br />
          Artisans Hand
          <br />
          Baked Beads
          <br />
          John Barkhausen
          <br />
          Dana Barrows
          <br />
          Better Travel
          <br />
          Big Town Gallery
          <br />
          Broadleaf Landscape Architecture
          <br />
          Bliss Ridge
          <br />
          Bundy Modern
          <br />
          Butternut Systems
          <br />
          Chooseco
          <br />
          Complexions
          <br />
          Darrad Services
          <br />
          The Design Group
          <br />
          Elevation Physical Therapy
          <br />
          East Warren Community Market
          <br />
          Green Toolbox
          <br />
          High Country Hair
          <br />
          Trish Hopkins
          <br />
          Michael Levengood
          <br />
          Maclay Architects
          <br />
          Mad River Massage
          <br />
          Mad River Web
          <br />
          Mad River Hydro
          <br />
          Mad River Massage
          <br />
          Medusa Studio
          <br />
          Mehurons
          <br />
          Northern Reliability
          <br />
          The Pitcher Inn
          <br />
          R. H. Travers Company
          <br />
          Sanford Strauss Architects
          <br />
          Scout's Honor Creamery
          <br />
          Sellers & Company Architecture
          <br />
          Sugarhouse Soundworks
          <br />
          MacKenzie & Joel Taplin
          <br />
          The Tree House Guys
          <br />
          Tonewood Maple
          <br />
          Verilux
          <br />
          Vees Flowers
          <br />
          The Warren Store
          <br />
               <br />
            </div>
            <div className="line"></div>
            <div className="sponsorHowTo">
               <div>
                  Our sponsors help keep ticket prices low, make special events
                  possible, and spread the word about the varied events we present
                  each summer.
            <br />
                  <br />
            To become a sponsor or make a donation, please email us at
            tracy@madriver.com or call (802) 496-5997.
            <br />
                  <br />
                  <p className="special">SPECIAL THANKS TO THE WARREN ARTS COMMITTEE AND THE ZOOT FUND OF
                  THE VERMONT COMMUNITY FOUNDATION FOR HELPING US PURCHASE ALL NEW
            FLOORING FOR OUR STAGE IN 2013!</p>
               </div>
            </div>
         </div>
      </div>
   );
}

//------export the component---------
export default About;
