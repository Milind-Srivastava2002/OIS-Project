import React from "react";
import "./style.css";

export const NavBar = ({
  style,
  rectangleStyle,
  rectangleStyleOverride,
  homeStyle,
  theFacilityStyle,
  membershipsStyle,
  battingCagesStyle,
  programsEventsStyle,
  contactUsStyle,
  rectangle6Style,
  iconsaxLinearUsersquareStyle,
  iconsaxLinearUsersquare = "/img/iconsax-linear-usersquare.svg",
  SIGNUpStyle,
}) => {
  return (
    <div className={"NAV-BAR-NAV-BAR"}>
      <div className={"NAV-BAR-overlap-group"}>
        <div className={"NAV-BAR-rectangle"} style={rectangleStyle} />
        <div className={"NAV-BAR-rectangle-5"} style={rectangleStyleOverride} />
        <div className={"NAV-BAR-home"} style={homeStyle}>
          Home
        </div>
        <div className={"NAV-BAR-the-facility"} style={theFacilityStyle}>
          The Facility
        </div>
        <a href="#coursel">
          <div className={"NAV-BAR-memberships"} style={membershipsStyle}>
            Memberships
          </div>
        </a>
        <div className={"NAV-BAR-batting-cages"} style={battingCagesStyle}>
          Batting Cages
        </div>
        <div className={"NAV-BAR-programs-events"} style={programsEventsStyle}>
          Programs &amp; Events
        </div>
        <div className={"NAV-BAR-contact-us"} style={contactUsStyle}>
          Contact Us
        </div>
        <div className={"NAV-BAR-rectangle-6"} style={rectangle6Style} />
        <img
          className={"NAV-BAR-iconsax-linear-usersquare"}
          style={iconsaxLinearUsersquareStyle}
          src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-usersquare-2.svg"
        />
        <a href="http://35.72.8.63:36475/">
          <div className={"NAV-BAR-SIGN-UP"} style={SIGNUpStyle}>
            SIGN UP
          </div>
        </a>
        <img
          className={"NAV-BAR-OLYMPICLOGO"}
          src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed44f8a1a58d92896d8c03/img/olympiclogo-1.png"
        />
      </div>
    </div>
  );
};
