import 'bootstrap/dist/css/bootstrap.min.css';
import './Bed.css'
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Bed() {
  React.useEffect (()=>{
    AOS.init();
},[]);
const Navigate = useNavigate();

function handleClick (){
  Navigate ("/Hospital")
}
function handleClick1 (){
  Navigate ("/Doctorappo")
}

  return (
    <div className='Bed' data-aos="fade-up">
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody className='as'>
            <MDBCardTitle >Hospital Bed</MDBCardTitle>
            <MDBCardText>
              Why wait click now to book hospital's bed as your choice by paying a minimal amount.
            </MDBCardText>
            <MDBBtn onClick={handleClick} className="a11" >Book Now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody className='as'>
            <MDBCardTitle>Doctor's Appointment</MDBCardTitle>
            <MDBCardText>
              Choose your speatialist and book your appointment as your choice.
            </MDBCardText>
            <MDBBtn onClick={handleClick1 } className="a11" >Book Appointment</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
    </MDBRow>
    </div>
  );
}