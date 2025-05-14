import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Pic.css'
import AOS from 'aos';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Pic() {
  React.useEffect (()=>{
    AOS.init();
},[]);
  return (
    <div className='Pic'>
    <MDBCarousel showIndicators showControls fade picc>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mcmscache.epapr.in/post_images/website_350/post_28872061/full.jpg'
        alt='...'
      >
        <h5>Hospital Beds</h5>
        <p>During Emergency Purposes we are providing the concept of booking beds in your locality</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.datocms-assets.com/50071/1632501834-solutionsemergencywaitingroom.jpg?auto=format&fit=max&w=1200'
        alt='...'
      >
        <h5>Waiting Room</h5>
        <p>Why to wait,in such a mess? Appoint your peronalized doctor according to your requirements join us and book your appointment</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://jssamch.org/wp-content/uploads/2018/02/JSS-Ayurveda.prakruthi.jpg'
        alt='...'
      >
        <h5>Doctor's Clinic</h5>
        <p>Well oragnized and fully equipt we are providing the available requirement through our website.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}