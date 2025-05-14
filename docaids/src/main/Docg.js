import React, { useState } from "react";
import Sidenav from "./Sidenav";
import bgImg from "../assets/doc.gif";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Docg.css";
import { Modal } from 'react-responsive-modal';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
export default function Docg(props) {
  const [ayush, setAyush] = React.useState("C1");
  const [ayush1, setAyyush] = React.useState("C2");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
  React.useEffect(() => {
    console.log(props.user);
  })
  function hidee(e) {
    let namee = e.target.name;
    let u = e.target.value;
    console.log(u);
    setUserData(() => { return { ...userData, [namee]: u } });
    if (u === "offline") {
      console.log("C2");
      setAyyush("C2");
    }
    else {
      console.log("C1");
      setAyush("C1");
    }
  }
  const [userData, setUserData] = useState({
    Name: "",
    PhoneNumber: "",
    location: "",
    type:"Doctor",
    Date1: "",
    Time1: "",
    Option: ""
  });

  let date, value;
  const postUserData = (event) => {
    // date = event.target.date;
    date = event.target.name;
    value = event.target.value;
    console.log("name " + date);
    setUserData(() => { return { ...userData, [date]: value } });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { Name,
      PhoneNumber,
      location,
      type,
      Date1,
      Time1, Option } = userData;
    console.log(userData);
    if (Name && PhoneNumber && location && Date1 && Time1) {
      const res = fetch("https://doctor-abc30-default-rtdb.firebaseio.com/DoctorAppointment.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          PhoneNumber,
          location,
          type,
          Date1,
          Time1,
          Option
        }),
      });
      if (res) {
        setUserData({
          Name,
          PhoneNumber,
          location,
          Date1,
          Time1,
          Option
        });
        alert("Form Submitted");
      }
      else {
        alert("Plz fill the data");
      }
    } else {
      alert("Plz fill the data");
    }
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [state, setState] = useState({
    card:"",
    card1:"",
    card2:"",
    card3:"",
    card4:"",
    card5:"",
  });

  const { card,card1,card2,card3,card4,card5 } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  return (
    <div>
      <div>
        <Sidenav Pic="https://tse1.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=Api&rs=1&c=1&qlt=95&w=110&h=116" />
      </div>
      <section className="sec12">
        <div className="register">
          <div className="col-1">
            <div className="e">
              <h2 className="">Doctor Appointment</h2>
              <span>Fill up the form to get the service</span>
            </div>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="text" name="Name" {...register("Name")} placeholder="Name" value={userData.Name}
                onChange={postUserData} />
              <input
                name="PhoneNumber"
                type="text"
                {...register("PhoneNumber")}
                placeholder="Phone Number"
                value={userData.PhoneNumber}
                onChange={postUserData}
              />
              <input
                type="text"
                name="location"
                {...register("location", { required: true, maxLength: 10 })}
                placeholder="location"
                value={userData.location}
                onChange={postUserData}
              />
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Service</Form.Label>
                <Form.Select defaultValue="Choose" name="Option" {...register("Option")} onChange={hidee}>
                  <option value="">Option</option>
                  <option value="virtually">Virtually</option>
                  <option value="offline">Offline</option>
                </Form.Select>
              </Form.Group>
              <Form.Label>pick your date</Form.Label>
              <input
                name="Date1"
                type="date"
                {...register("Date1")}
                value={userData.Date1}
                onChange={postUserData}
              />
              {/* <DatePicker
                    name="Date1"
                    {...register("Date1")}
                    value={userData.Date1}
                    onChange={postUserData}
                   placeholderText="MM/DD/YYYY"
                  selectsStart */}
              {/* // startDate={startDate}
                  // excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  // endDate={endDate}
                  // minDate={startDate2}
                // /> */}
              <Form.Label>time</Form.Label>
              <input
                name="Time1"
                type="time"
                {...register("Time1")}
                value={userData.Time1}
                onChange={postUserData}
              />
              <Popup className='pop' trigger={<button variant="success" className='btn' onClick={onOpenModal}>Booking</button>} position="top center left" >
                <div className='po'><form form method="POST">
                  <MDBContainer
                    // className="py-5"
                    // fluid
                    // style={{
                    //   backgroundColor:
                    //     "white",
                    // }}
                  >
                    <MDBRow className=" d-flex justify-content-center">
                      <MDBCol md="16" lg="10" xl="5">
                        <MDBCard className="rounded-3 p-444">
                          <MDBCardBody className="p-4 " >
                            <div className="text-center mb-4">
                              <h6>Payment</h6>
                            </div>
                            <p className="fw-bold mb-4 pb-2">Saved cards:</p>
                            <div className="d-flex flex-row align-items-center mb-4 pb-1">
                              <img
                                className="img-fluid"
                                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                              />
                              <div className="flex-fill mx-3">
                                <div className="form-outline">
                                  <MDBInput
                                    label="Card Number"
                                    name="card"
                                    id="form1"
                                    type="text"
                                    size="lg"
                                    onChange={handleInputChange}
                                    value={card}
                                  />
                                </div>
                              </div>
                              <a href="#!">Remove card</a>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4 pb-1">
                              <img
                                className="img-fluid"
                                src="https://img.icons8.com/color/48/000000/visa.png"
                              />
                              <div className="flex-fill mx-3">
                                <div className="form-outline">
                                  <MDBInput
                                    label="Card Number"
                                    name="card1"
                                    id="form2"
                                    type="text"
                                    size="lg"
                                    onChange={handleInputChange}
                                    value={card1}
                                  />
                                </div>
                              </div>
                              <a href="#!">Remove card</a>
                            </div>
                            <p className="fw-bold mb-4">Add new card:</p>
                            <MDBInput
                              label="Cardholder's Name"
                              name="card2"
                              id="form3"
                              type="text"
                              size="lg"
                              onChange={handleInputChange}
                              value={card2}
                            />
                            <MDBRow className="my-4">
                              <MDBCol size="7">
                                <MDBInput
                                  label="Card Number"
                                  name="card3"
                                  id="form4"
                                  type="text"
                                  size="lg"
                                  onChange={handleInputChange}
                                  value={card3}
                                />
                              </MDBCol>
                              <MDBCol size="3">
                                <MDBInput
                                  label="Expire"
                                  name="card4"
                                  id="form5"
                                  type="password"
                                  size="lg"
                                  placeholder="MM/YYYY"
                                  onChange={handleInputChange}
                                  value={card4}
                                />
                              </MDBCol>
                              <MDBCol size="2">
                                <MDBInput
                                  label="CVV"
                                  name="card5"
                                  id="form6"
                                  type="password"
                                  size="lg"
                                  placeholder="CVV"
                                  onChange={handleInputChange}
                                  value={card5}
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBBtn color="success" size="lg" block onClick={submitData}>
                              Make Payment
                            </MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </form>
                </div>
              </Popup>

            </form>
          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}