import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css'
export default function Footerr() {
    React.useEffect (()=>{
      AOS.init();
  },[]);
  return (
    <MDBFooter className='text-center text-lg-start text-muted like'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                DoC+Aid
              </h6>
              <p>
                This is a website which is help you to connect to hospital directly around your location given and also help in booking your beds,helps in tracking hospital's bed availability.Futhur its also provide a option of appoit a doctor as per as your speatilisation reqiured.
              </p>
            </MDBCol>
{/* 
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Reviews</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Doctors
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hospitals
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Clinics
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Donation
                </a>
              </p>
            </MDBCol> */}

            {/* <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Track
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                India,Kolkata
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3'/>
                docaidcomp2023@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 7439-7721-70
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 033-2563-3774
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        </a>
      </div>
    </MDBFooter>
  );
}