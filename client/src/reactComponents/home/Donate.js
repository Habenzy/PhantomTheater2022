//-------------------------------------Imports--------------------------
import React from "react";
import "./Donate.css";

function Donate() {
  return (
    <div className="donate">
      <div className="donateWrapper">
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=CU35GHQ4HTM6C"
          target="_blank"
        >
          <h1 className="donate-link">Donate</h1>
        </a>
        <div className="copy">
          <p>
            Phantom Theater is for and by artists and the community. We are
            committed to supporting both through the performing arts. While a
            portion of admissions to our shows helps offset our operating costs
            - including rent, utilities, and an honorarium for our artistic
            director - we rely on donations and grants for both seasonal costs
            and major upgrades. For instance, in 2021 we replaced our archaic
            and faulty lighting system with a modern LED grid and board through
            the generosity of our patrons, a benefit performance by{" "}
            <a href="https://wesliband.com/">Wesli</a>, and the{" "}
            <a href="https://www.vermonthumanities.org/">
              Vermont Humanities Council
            </a>
            .
            <br />
            <br />
            Every donation counts! And as a 501.c3 organization, every donation
            is also tax deductible. Please consider adding your name to the list
            of donors today! <br />
            Checks can be made out to: <br />
            Phantom Theater <br />
            PO Box 373, Warren, VT 05674.
          </p>
        </div>
        <div className="sponsorsWrapper">
          <h1>Sponsors</h1>
          <p className="thankYou">
            PHANTOM THEATER IS PROUD TO COUNT MANY LOCAL BUSINESSES AND
            INDIVIDUALS AS FRIENDS AND SUPPORTERS. THANK YOU TO ALL OUR
            SPONSORS!
          </p>
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
            <br></br>
            AIDAN SCHOELLKOPF ANNIE ELIAS AND DAVID SINAIKO
            <br></br>ART SCHALLER
            <br></br>ARTISANS GALLERY
            <br></br>BAKED BEADS
            <br></br>BETH AND JEFF SCHOELLKOPF
            <br></br>BETTER TRAVEL
            <br></br>BIG PICTURE THEATER AND CAFÉ
            <br></br>BILL AND ALEX MACLAY
            <br></br>BILL WADSWORTH
            <br></br>BOBBI AND MAC ROOD
            <br></br>BONNIE HONIG
            <br></br>BROADLEAF LANDSCAPE ACHITECTURE
            <br></br>CANDACE ALSOP
            <br></br>CATHERINE BENHAM
            <br></br>CONNIE COLMAN AND RICHARD TRAVERS
            <br></br>DANA BARROWS
            <br></br>DARRAD
            <br></br>DEBBIE AND BOB FIRST
            <br></br>DEBBIE ND JOHN NEW
            <br></br>DOROTHY TOD
            <br></br>EAST WARREN COMMUNITY MARKET
            <br></br>ELIZABETH JONDRO
            <br></br>FAYSTON FORAGERS
            <br></br>HANS AND LAURIE BOERMA
            <br></br>HIGH COUNTRY HAIR DESIGN
            <br></br>J.S. BARKHAUSEN COMPANY
            <br></br>JANE AND PETER SCHNEIDER
            <br></br>JILL BOBROW AND JOHN ANDERSON
            <br></br>JITO COLEMAN AND BONNIE ATWATER
            <br></br>JULIA AND TIM PURINTON
            <br></br>KATE AND ROGER YOUNGDAHL
            <br></br>KINNY PEROT
            <br></br>LUCY O'BRIEN
            <br></br>MACLAY ARCHITECTS
            <br></br>MADISON HAJJAR
            <br></br>MARY AND PIERRE MOFFROID
            <br></br>MICHAEL LEVENGOOD
            <br></br>NANCY AND RICHARD BROWNE
            <br></br>NANCY MERCER
            <br></br>NANCY MOBLEY
            <br></br>NICHOLAS AND ANNMARIE HARMON
            <br></br>PAT PINKSTON & MARTINE GUTIERREZ
            <br></br>PEGGY AND SPARKY POTTER
            <br></br>RONI AND SUCOSH NORTON
            <br></br>RIVERS EDGE INTEGRATIVE MEDICINE
            <br></br>SANFORD/STRAUSS ARCHITECTS
            <br></br>SHANNON GILLIGAN
            <br></br>SUSAN BAUCHNER
            <br></br>TAPLIN FAMILY
            <br></br>THE PARKER-REICHER FAMILY
            <br></br>THE PLATT FAMILY
            <br></br>THE WARREN ARTS COMMITTEE
            <br></br>THE WINTERS FAMILY
            <br></br>TRISH HOPKINS
            <br></br>VEE'S FLOWERS
            <br></br>WARREN ARTS COMMITTEE
          </div>
          <div className="line"></div>
          <div className="sponsorHowTo">
            <div>
              Our sponsors help keep ticket prices low, make special events
              possible, and spread the word about the varied events we present
              each summer.
              <br />
              <br />
              Will you join us this year as a Friend of the Artists and
              contribute what you can to this worthy cause? You will make a real
              difference to the people who enrich us all with their art.
              <br />
              <br />
              <br></br>
              <p className="special">
                With gratitude,
                <br></br>
                The Phantom Theater Board
                <br></br>
                Lucas Bates, Claudia Becker, Beth Binns Schoellkopf, Laura
                Brines, MC DeBelina, Dan Eckstein, Janet Hubbard-Brown, Sheryl
                Kurland-Platt, Lexi Leacock, Tracy Martin, Mary Moffroid, Sucosh
                Norton, Jim Sanford, Bob Stauss, Kate Youngdahl
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//------export the component---------
export default Donate;
