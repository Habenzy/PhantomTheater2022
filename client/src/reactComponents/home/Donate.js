//-------------------------------------Imports--------------------------
import React from "react";
import "./Donate.css";

function Donate() {
  return (
    <div className="donate">
      <div className="donateWrapper">
        <a href="https://www.paypal.com/donate/?hosted_button_id=CU35GHQ4HTM6C" target="_blank"><h1 className="donate-link">Donate</h1></a>
        <div className="copy">
          <p>As a loyal supporter of Phantom, you are the heart of our audience, the reason we do what we do.</p>
          <p>Historically, Phantom Theater has relied on local businesses and ticket sales to help performers cover travel and lodging, as well as a small honorarium for their creative work.  Unfortunately, that honorarium often fell short in reimbursing the tremendous effort that goes into our artists’ innovative entertainment. Last year we started the Friend of the Artists initiative to help us offer more substantial support to our creative community who performs here at Phantom Theater. When asked to donate what they could, our Friends came through, with an average donation of $150. 
</p>
<p></p>
<p></p>
        </div>
         <div className="sponsorsWrapper">
        {/*  <h1>Sponsors</h1>
          <p className="thankYou">PHANTOM THEATER IS PROUD TO COUNT MANY LOCAL BUSINESSES AND INDIVIDUALS AS FRIENDS
          AND SUPPORTERS.
            THANK YOU TO ALL OUR SPONSORS!</p>
          <br />
          <div className="sponsorsList">
            About Being
          <br />
          American Flatbread
          <br />
          Anonymous
          <br />
          Artisans' Gallery
          <br />
          Baked Beads
          <br />
          John Barkhausen
          <br />
          Dana Barrows
          <br />
          Better Travel
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
          Mad River Web
          <br />
          Mad River Hydro
          <br />
          Medusa Studio
          <br />
          Mehurons
          <br />
          The Pitcher Inn
          <br />
          R. H. Travers Company
          <br />
          Sanford Strauss Architects
          <br />
          Sellers & Company Architecture
          <br />
          Sugarhouse Soundworks
          <br />
          MacKenzie & Joel Taplin
          <br />
          The Tree House Guys
          <br />
          Trish Hopkins
          <br />
          Vees Flowers
          <br />
          The Warren Store
          <br />
  <br /> 
          </div>*/}
          <div className="line"></div>
          <div className="sponsorHowTo">
            <div>
            <br />
              <br />
              Will you join us this year as a Friend of the Artists and contribute what you can to this worthy cause? You will make a real difference to the people who enrich us all with their art.

            <br />
            Please either use the donate button or send your donation to Phantom Theater by check, care of Mary Moffroid, PO Box 373, Warren VT 05674.  Thank you so very much for considering a contribution to Phantom Theater.  We look forward to seeing you in the Barn!
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
