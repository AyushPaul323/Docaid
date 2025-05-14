import React from 'react';
import { BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Social.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Social() {
  return (
    <MDBFooter className='bg-light text-center text-white ki'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-45'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/'
            role='button'
            target="_blank"
          >
            <div className='face'>
            <BsFacebook />
            </div>

          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
            role='button'
            // target="_blank"
          >
            <div className='face'>
            <BsTwitter />
            </div>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/'
            role='button'
            target="_blank"
          >
            <div className='face'>
            <BsInstagram />
            </div>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://in.linkedin.com/'
            role='button'
            target="_blank"
          >
            <div className='face'>
            <BsLinkedin />
            </div>
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}