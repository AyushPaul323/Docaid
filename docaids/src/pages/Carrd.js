import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Carrd.css'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
function Carrd() {
  const Navigate = useNavigate();
  function cf1() {
    window.open('https://formspree.io/forms/mwkjnkob/submissions','_blank')
    // window.location.href = 'https://console.firebase.google.com/u/0/project/no-starve/database/no-starve-default-rtdb/data';
  }
  function cf2() {
    Navigate("/Records")
  }
  function cf3() {
    Navigate("/Records1")
  }
  function cf4() {
    window.open('https://docs.google.com/spreadsheets/d/1diB-r2W3pKnM124Ukb15xlc8ooBvq7ivUytgmkwkDRY/edit?pli=1#gid=331283204','blank')
  }
  
   return (
    <div>
    <div className='rr1'>
   <MDBCard className='rrr1' >
   <MDBCardBody>
     <MDBCardTitle className='rt1'>Query Section</MDBCardTitle>
     <MDBCardText className='rt1'>This a database where user or customer query will get stored after submitting the contact us form.</MDBCardText>
     <div className='fg1'><MDBBtn variant="primary" onClick={cf1} className='a111'>Go somewhere</MDBBtn></div>
   </MDBCardBody>
 </MDBCard>
 </div>
 <div className='rr2'>
   <MDBCard className='rrr1' >
   <MDBCardBody>
     <MDBCardTitle  className='rt1'>Doctor's Database</MDBCardTitle>
     <MDBCardText className='rt1'>This a database where doctors can able to see information about their patients after booking appointment.</MDBCardText>
     <div className='fg1'><MDBBtn variant="primary" onClick={cf2} className='a111'>Go somewhere</MDBBtn></div>
   </MDBCardBody>
 </MDBCard>
 </div>
 <div className='rr3'>
   <MDBCard className='rrr1' >
   <MDBCardBody>
     <MDBCardTitle  className='rt1'>Hospital's DataBase</MDBCardTitle>
     <MDBCardText className='rt1'>This a database where every hospital can see their patients record who have booked bed.</MDBCardText>
     <div className='fg1'><MDBBtn variant="primary" onClick={cf3} className='a111'>Go somewhere</MDBBtn></div>
   </MDBCardBody>
 </MDBCard>
 </div>
 <div className='rr4'>
   <MDBCard className='rrr1' >
   <MDBCardBody>
     <MDBCardTitle  className='rt1'>Ambulance's Database</MDBCardTitle>
     <MDBCardText className='rt1'>This is a database to store the record of customer who seeks for ambulance service.</MDBCardText>
     <div className='fg1'><MDBBtn variant="primary" onClick={cf4} className='a111'>Go somewhere</MDBBtn></div>
   </MDBCardBody>
 </MDBCard>
 </div>
 </div>  
  );
}
export default Carrd;