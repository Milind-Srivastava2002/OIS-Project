import React, { useState } from "react";
import "./SIGNUPBASEBALL32.css";
const fs = require("fs");
import axios from "axios";

function SIGNUPBASEBALL32(props) {
  const {
    contactUs1,
    screenshot20230123At8321,
    place,
    theFacility,
    memberships,
    battingCages,
    programsEvents,
    contactUs2,
    ois,
    haveAQuestionAbou,
    firstNameLastName1,
    phoneNumber,
    emailAddress1,
    messageOrQuestion,
    submit,
    eazy,
    base1,
    signUp,
    firstNameLastName2,
    dOBMmDdYyyy,
    emailAddress2,
    mobileNumber,
    pinCodeOnlyAvailableForBaltimore,
    iHavePreviousExperienceInBaseball,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    letsGo,
    x2023OlympicIndoo,
  } = props;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [pincode, setPincode] = useState("");

  const writeToCSV = async () => {
    if (
      name !== "" ||
      date !== "" ||
      email !== "" ||
      phno !== "" ||
      pincode !== ""
    ) {
      const response = axios
        .post("http://35.72.8.63:8000//post/form", {
          // const response = await axios.post('http://localhost:7777/app/feedback', {
          name: name,
          date: date,
          email: email,
          phno: phno,
          pin: pincode,
        })
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);

          return error;
        });

      window.location.href = "http://35.72.8.63:34365/";
    }

    // console.log(data);
    // writeFileJSON("myJSON.json", JSON);
  };

  const onClick = () => {
    window.location.href = "http://35.72.8.63:5678/";
  };

  const debug = () => {
    console.log(name + " " + date + " " + email + " " + phno + " " + pincode);
    // fs.writeFile("./myJSON.json", JSON.stringify(formObject), (err) => {
    //   if (err) console.log("Error writing file:", err);
    // });
    fs.writeFile(
      "/Users/Chirag/Desktop/data.txt",
      JSON.stringify(obj),
      function (err) {
        if (err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      }
    );
  };

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-baseball screen">
        <div className="overlap-group8">
          <div className="overlap-group1">
            <div className="rectangle-38"></div>
            <div className="rectangle-52"></div>
            <div className="rectangle-42"></div>
            <div className="contact-us dohyeon-normal-white-37px">
              {contactUs1}
            </div>
            <div className="rectangle-43"></div>
            <div className="rectangle-44"></div>
            <div className="rectangle-33"></div>
            <div className="rectangle-5"></div>
            <img
              className="screenshot-2023-01-23-at-832-1"
              src="https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed44f8a1a58d92896d8c03/img/olympiclogo-1.png"
              alt="Screenshot 2023-01-23 at 8.32 1"
            />

            <p
              className="place akshar-normal-black-19px"
              onClick={onClick}
              style={{ zIndex: 999, cursor: "pointer" }}
            >
              {/* <a
                className="place akshar-normal-black-19px"
                href="http://35.72.8.63:1234/"
              >
                HOME
              </a> */}
              HOME
            </p>

            <div className="the-facility akshar-normal-black-19px">
              {theFacility}
            </div>
            <div className="place memberships akshar-normal-black-19px">
              {memberships}
            </div>
            <div className="batting-cages akshar-normal-black-19px">
              {battingCages}
            </div>
            <div className="programs-events akshar-normal-black-19px">
              {programsEvents}
            </div>
            <div className="contact-us-1 akshar-normal-black-19px">
              {contactUs2}
            </div>
            <div className="rectangle-6"></div>

            <h1 className="have-a-question-abou dohyeon-normal-celeste-54px">
              {haveAQuestionAbou}
            </h1>
            <div className="rectangle-45"></div>
            <div className="rectangle-49"></div>
            <div className="rectangle-50"></div>
            <div className="rectangle-48"></div>
            <p className="first-name-last-name inter-light-gray-nickel-20px">
              {firstNameLastName1}
            </p>
            <div className="phone-number inter-light-gray-nickel-20px">
              {phoneNumber}
            </div>
            <div className="email-address inter-light-gray-nickel-20px">
              {emailAddress1}
            </div>
            <div className="message-or-question inter-light-gray-nickel-20px">
              {messageOrQuestion}
            </div>
            <div className="rectangle-51"></div>
            <div className="submit inter-bold-black-30px">{submit}</div>
            <img
              className="iconsax-linearmessagequestion"
              src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-messagequestion-1.svg"
              alt="Iconsax/Linear/messagequestion"
            />
            <img
              className="iconsax-linearusersquare"
              src="https://anima-uploads.s3.amazonaws.com/projects/636e8b12dd63d44d26a503cc/releases/63d5473d0a7b05b1acab5225/img/iconsax-linear-usersquare-2.svg"
              alt="Iconsax/Linear/usersquare"
            />
            <div className="eazy inter-bold-white-21px">SIGN UP</div>
            <div className="base-1 animate-enter">
              <img id="img-cricket" src={"https://cdn.animaapp.com/projects/63ece14667db4bb19c023a64/releases/63ed38e2ecb1a84edc9c78c7/img/crick-1-3.png"} alt="BASE 1" />
            </div>
          </div>
          <div className="sign-up inter-bold-white-46px">{signUp}</div>

          <form onSubmit={debug}>
            <input
              className="overlap-group3 inter-light-gray-nickel-20px"
              required
              placeholder={firstNameLastName2}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              type="date"
              className="overlap-group5 inter-light-gray-nickel-20px"
              required
              placeholder={dOBMmDdYyyy}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />

            <input
              type="email"
              className="overlap-group inter-light-gray-nickel-20px"
              placeholder={emailAddress2}
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="text"
              className="overlap-group7 inter-light-gray-nickel-20px"
              placeholder={mobileNumber}
              value={phno}
              required
              onChange={(e) => {
                setPhno(e.target.value);
              }}
            />

            <input
              type="text"
              className="overlap-group4 inter-light-gray-nickel-20px"
              placeholder={pinCodeOnlyAvailableForBaltimore}
              value={pincode}
              required
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />

            {/* <p className="i-have-previous-experience-in-baseball inter-light-white-18px">
            {iHavePreviousExperienceInBaseball}
          </p> */}
            <input
              className="rectangle-57"
              type="checkbox"
              autoComplete="off"
            />
            <label
              htmlFor="vehicle1"
              className="i-have-previous-experience-in-baseball inter-light-white-18px"
            >
              {iHavePreviousExperienceInBaseball}
            </label>

            <input type="checkbox" required className="rectangle-59" />
            <label className="i-agree-to-the-terms">
              <span className="inter-light-gray-nurse-16px">{spanText1}</span>
              <span className="span-1 inter-light-dodger-blue-16px">
                {spanText2}
              </span>
              <span className="inter-light-dodger-blue-16px">{spanText3}</span>
              <span className="inter-light-gray-nurse-16px">{spanText4}</span>
              <span className="inter-light-dodger-blue-16px">{spanText5}</span>
              <span className="span-1 inter-light-dodger-blue-16px">
                {spanText6}
              </span>
              <span className="inter-light-gray-nurse-16px">{spanText7}</span>
            </label>

            <div className="overlap-group2">
              <div className="rectangle-60"></div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  writeToCSV();
                }}
                border="none"
                style={{ background: "transparent", border: "none" }}
                className="lets-go"
              >
                {/* <a href="http://localhost:52829/" type="submit">
                  {letsGo}
                </a> */}
                {submit}
              </button>
            </div>
          </form>
        </div>
        <div className="overlap-group6">
          <p className="x2023-olympic-indoo chakrapetch-normal-white-15px">
            {x2023OlympicIndoo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SIGNUPBASEBALL32;
