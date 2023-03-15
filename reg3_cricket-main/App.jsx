import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SIGNUPBASEBALL from "./components/SIGNUPCRICKET";
import ThanksForRegister from "./components/ThanksForRegister";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|sign-up-baseball-2)">
          <SIGNUPBASEBALL {...sIGNUPBASEBALLData} />
        </Route>
        <Route path="/ThanksForRegister">
          <ThanksForRegister />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const sIGNUPBASEBALLData = {
  registration: "REGISTRATION",
  x2023OlympicIndoo: (
    <React.Fragment>
      <br />© 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
    </React.Fragment>
  ),
  screenshot20230123At8321:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/screenshot-2023-01-23-at-8-32-1.png",
  place: "Home",
  theFacility: "The Facility",
  memberships: "Memberships",
  battingCages: "Batting Cages",
  programsEvents: "Programs & Events",
  contactUs: "Contact Us",
  ois: "OIS",
  eazy: "EAZY",
  cropYourPhotoToF: "Crop your photo to fit perfect inside the below space.",
  letsGo: "Let’s Go!",
  pexelsPixabay1632091:
    "https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d65a1bb1f985b51a114209/img/pexels-pixabay-163209-1.png",
  title: "SIGN UP",
  letsCreateYourCustomPlayersCard: "Let’s create your custom Player’s Card.",
  number: "2",
};
