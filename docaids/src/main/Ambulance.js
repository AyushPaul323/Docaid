import React, { Component, useState } from "react";
import Popup from 'reactjs-popup';
import Sidenav from "./Sidenav";
import bgImg from "../assets/ambu.gif";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Modal } from 'react-responsive-modal';
import { MDBFile } from 'mdb-react-ui-kit';
import firebase from "./firebase";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./Ambulance.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { background } from "@chakra-ui/react";
const auth = getAuth(firebase);
export default class Ambulance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      mobile: "",
      verifyButton: false,
      verifyOtp: false,
      otp: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.OnSignInSubmit = this.OnSignInSubmit.bind(this);
    this.verifycode= this.verifycode.bind(this);
  }

  OnCaptchVerify() {

    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        this.OnSignInSubmit();
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
    }, auth);
  }


  OnSignInSubmit() {
    this.OnCaptchVerify();
    const phoneNumber = "+91" + this.state.mobile;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        alert("Otp Has Been Send");
        this.setState({ verifyOtp: true });
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  verifycode() {
    window.confirmationResult.confirm(this.state.otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      alert("Ambualnce Request Has Been Generated");
      // ...
    }).catch((error) => {
      alert("Invalid Otp");
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  changemobile(e) {
    this.setState({ mobile: e.target.value }, function () {
      if (this.state.mobile.length === 10) {
        this.setState({
          verifyButton: true,
        });
      }
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, mobile } = this.state;
    console.log(fname, lname, mobile);
    fetch("https://doctor-abc30-default-rtdb.firebaseio.com/Ambulance.json", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Constant-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname: "",
        mobile: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <div>
        <div>
          <Sidenav Pic="https://tse1.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=Api&rs=1&c=1&qlt=95&w=110&h=116" />
        </div>
        <section className="allll">
          <div className="register">
            <div className="ayusss">
              <div className="e">
                <form onSubmit={this.handleSubmit} className="nuyt">
                  <h3 className="wwee">Ambulance Service</h3>
                  <span>Fill up the form to get the service</span>
                  <div id="recaptcha-container"></div>
                  <div className="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e) => this.setState({ fname: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label>Mobile</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Mobile"
                      onChange={(e) => this.changemobile(e)} />
                    {this.state.verifyButton ? <input type="button" className="a11" value="verify" onClick={this.OnSignInSubmit} style={{ backgroundColor: "#016d2", width: "100%", padding: 8, color: "white", border: "none", }} /> : null}
                  </div>
                  {this.state.verifyOtp ? <div className="mb-3">
                    <label>OTP</label>
                    <input
                      type="number"
                     
                      className="form-control"
                      placeholder="Enter OTP"
                      onChange={(e) => this.setState({ otp: e.target.value })} />
                    <input type="button" className="a11" value="OTP" onClick={this.verifycode} style={{ backgroundColor: "#016d2", width: "50%", padding: 8, color: "white", border: "none", }} />
                  </div> : null}
                </form>
              </div>
              <div className="IImg">
                <img className="" src={bgImg} alt="" />
              </div>
              
            </div>
            </div>
        </section>
      </div>
    )
  }
}



        