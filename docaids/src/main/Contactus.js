import Sidenav from "./Sidenav";
// import styled from "styled-components";

// const Contacts = (props) => {
//     const Wrapper = styled.section`
//   padding: 9rem 0 5rem 0;
//   .container {
//     margin-top: 6rem;
//     text-align: center;
//     .contact-form {
//       max-width: 50rem;
//       margin: auto;
//       .contact-inputs {
//         display: flex;
//         flex-direction: column;
//         gap: 3rem;
//         input[type="submit"] {
//           cursor: pointer;
//           transition: all 0.2s;
//         }
//       }
//     }
//   }
// `;
//   return (
//     <div>
//       <Sidenav Pic={props.user.picture} />
//         <Wrapper>
//       <h2 className="common-heading">Feel Free to Contact us</h2>

//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7570651856895!2d88.36782471537127!3d22.588187638089863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027649d97bfbd1%3A0x60cc2ff24a3b2c2e!2sScottish%20Church%20College%20(SCC)!5e0!3m2!1sen!2sin!4v1679224465282!5m2!1sen!2sin"
//         width="100%"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/mwkjnkob"
//             method="POST"
//             className="contact-inputs">
//             <input
//               type="text"
//               name="username"
//               placeholder="username"
//               autoComplete="off"
//               required
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="message"
//               cols="30"
//               rows="6"
//               autoComplete="off"
//               required></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//     </div>
//   );
// };
// export default Contacts;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from "./firebase";
 import "./Contacts.css";
 import bgImg from "../assets/help.gif";
import Navbarr from "./Navbarr";

function Contacts(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div> <Navbarr />
    <section className="contact-section23">
      <div className="container123ayush">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="gghh">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mbb-4">Send us a message</h3>
                    <form
                      action="https://formspree.io/f/mwkjnkob"
                      method="POST"
                      id="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary123 a11"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="col-2">
            <img src={bgImg} width={590} height={589} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
export default Contacts;