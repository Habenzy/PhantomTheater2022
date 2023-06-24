//-------------------------------------Imports--------------------------
import React from "react";
import "./Donate.css";

function Donate() {
  return (
    <div className="donate">
      <div className="donateWrapper">
        <a href="https://www.paypal.com/donate/?hosted_button_id=CU35GHQ4HTM6C" target="_blank"><h1 className="donate-link">Donate</h1></a>
        <div className="copy">
          <p>Phantom Theater is for and by artists and the community.  We are committed to supporting both through the performing arts.  While a portion of admissions to our shows helps offset our operating costs - including rent, utilities, and an honorarium for our artistic director - we rely on donations and grants for both seasonal costs and major upgrades.  For instance, in 2021 we replaced our archaic and faulty lighting system with a modern LED grid and board through the generosity of our patrons, a benefit performance by <a href="https://wesliband.com/">Wesli</a>, and the <a href="https://www.vermonthumanities.org/">Vermont Humanities Council</a>.
            <br />
            <br />
            Every donation counts!   And as a 501.c3 organization, every donation is also tax deductible.  Please consider adding your name to the list of donors today!  <br />Checks can be made out to:  <br />Phantom Theater <br />
            PO Box 373, Warren, VT 05674.
</p>
        </div>
        <div className="sponsorsWrapper">
          <h1>Sponsors</h1>
          <p className="thankYou">PHANTOM THEATER IS PROUD TO COUNT MANY LOCAL BUSINESSES AND INDIVIDUALS AS FRIENDS
          AND SUPPORTERS.
            THANK YOU TO ALL OUR SPONSORS!</p>
          <br />
          <div className="sponsorsList">
            BETTER TRAVEL
            <br />
            BILL AND ALEX MACLAY
            <br />
            BILL WADSWORTH
            <br />
            BOBBI AND MAC ROOD
            <br />
            BONNIE HONIG
            <br />
            BROADLEAF LANDSCAPE ACHITECTURE
            <br />
            CATHERINE ALSOP
            <br />
            CATHERINE BENHAM
            <br />
            DOROTHY TOD
            <br />
            EAST WARREN COMMUNITY MARKET
            <br />
            HANS AND LAURIE BOERMA
            <br />
            HIGH COUNTRY HAIR DESIGN
            <br />
            J.S. BARKHAUSEN COMPANY
            <br />
            JANE AND PETER SCHNEIDER
            <br />
            JEFF AND BETH SCHOELLKOPF
            <br />
            JILL BOBROW AND JOHN ANDERSON
            <br />
            JITO COLEMAN AND BONNIE ATWATER
            <br />
            JULIA AND TIM PURINTON
            <br />
            MACLAY ARCHITECTS
            <br />
            MARY AND PIERRE MOFFROID
            <br />
            MICHAEL LEVENGOOD
            <br />
            NANCY AND RIHARD BROWNE
            <br />
            NANCY MOBLEY
            <br />
            PEGGY AND SPARKY POTTER
            <br />
            SANFORD/STRAUSS ARCHITECTS
            <br />
            SUSAN BAUCHNER
            <br />
            THE WINTERS FAMILY
          </div>
          <div className="line"></div>
          <div className="sponsorHowTo">
            <div>
              Our sponsors help keep ticket prices low, make special events
              possible, and spread the word about the varied events we present
              each summer.
            <br />
              <br />
              Will you join us this year as a Friend of the Artists and contribute what you can to this worthy cause? You will make a real difference to the people who enrich us all with their art.

            <br />
              <br />
              <br></br>
              <p className="special">With gratitude,
              <br></br>
 The Phantom Theater Board
 <br></br>
 Lucas Bates, Claudia Becker, Beth Binns Schoellkopf, Laura Brines, MC DeBelina, Dan Eckstein, Janet Hubbard-Brown, Sheryl Kurland-Platt, Lexi Leacock, Tracy Martin, Mary Moffroid, Sucosh Norton, Jim Sanford, Bob Stauss,  Kate Youngdahl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//------export the component---------
export default Donate;
