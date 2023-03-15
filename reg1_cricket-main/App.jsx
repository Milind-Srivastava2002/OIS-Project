import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SIGNUPBASEBALL32 from "./components/SIGNUPBASEBALL32";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-baseball)">
          <SIGNUPBASEBALL32 {...sIGNUPBASEBALL32Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sIGNUPBASEBALL32Data = {
    contactUs1: "CONTACT US",
    screenshot20230123At8321: "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/screenshot-2023-01-23-at-8-32-1.png",
    place: "Home",
    theFacility: "The Facility",
    memberships: "Memberships",
    battingCages: "Batting Cages",
    programsEvents: "Programs & Events",
    contactUs2: "Contact Us",
    ois: "OIS",
    haveAQuestionAbou: <React.Fragment>Have a question about signing up<br />for a game or renting the facility?</React.Fragment>,
    firstNameLastName1: "First Name & Last Name",
    phoneNumber: "Phone Number",
    emailAddress1: "Email Address",
    messageOrQuestion: "Message or Question",
    submit: "SUBMIT",
    eazy: "EAZY",
    base1: "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d797b797f87e6dea76ee19/img/base-1.png",
    signUp: "SIGN UP",
    firstNameLastName2: "First Name & Last Name",
    dOBMmDdYyyy: "D.O.B MM/DD/YYYY",
    emailAddress2: "Email Address",
    mobileNumber: "Mobile Number",
    pinCodeOnlyAvailableForBaltimore: "Pin Code (only available for Baltimore)",
    iHavePreviousExperienceInBaseball: "I have previous experience in Cricket.",
    spanText1: "I agree to the ",
    spanText2: "Terms of Service",
    spanText3: " ",
    spanText4: "and",
    spanText5: " ",
    spanText6: "Privacy Policy",
    spanText7: ".",
    letsGo: "LET’S GO!",
    x2023OlympicIndoo: <React.Fragment><br />© 2023 Olympic Indoor Sports.  Powered by Eazy Eyez Entertainment.</React.Fragment>,
};

