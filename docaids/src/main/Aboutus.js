import React, { useState } from "react";
import howToUseApp from "./howToUsw.js";
import Sidenav from "./Sidenav";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './Aboutus.css';
const Aboutus = (props) => {
    const [aboutData, setAboutData] = useState(howToUseApp);
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Sidenav Pic={props.user.picture} />
            <section className="common-section our-services">
                <div className="container mb-5555">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img class="rounded-circle" className="hillu" data-aos="fade-up-right"
                                height="400" src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc=" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list">




                            <div className="row our-services-info">
                                <div className="col-10 our-services-data"  data-aos="flip-right">
                                    <h2>At our core, we believe that everyone deserves access to high-quality healthcare services, and we are committed to making that a reality for all. Join us on our mission to transform the healthcare industry and improve the lives of people around the world.</h2>
                                </div>
                            </div>


                            <br />

                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd part of bayt us section  */}

            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-titleayu"  data-aos="flip-right"><u className="mini-titleayu">Mission Statement</u></h3>
                            <h1 className="main-heading" data-aos="zoom-in-up">
                                At our company, we are passionate about revolutionizing the healthcare industry by providing a seamless and hassle-free experience for users who are seeking to book a bed and schedule an appointment with a doctor. Our mission is to make healthcare accessible to everyone by removing the stress and inconvenience of booking appointments and beds, particularly during times of emergency or uncertainty.
                            </h1>


                            <div className data-aos="zoom-in-up">
                                <h1>We understand that navigating the healthcare system can be a daunting task, and that is why we have designed our platform to be intuitive, easy-to-use, and personalized. Our team of dedicated healthcare professionals is committed to ensuring that every user is matched with the right healthcare provider and bed that meets their unique needs.</h1>
                            </div>
                            <div data-aos="zoom-in-up">
                                <h1>By leveraging the latest technology and innovative solutions, we are constantly improving our platform to deliver the best possible experience for our users. We strive to be a trusted partner in your healthcare journey, providing you with peace of mind and empowering you to take control of your health and wellness.
                                </h1>
                            </div>
                        </div>

                        <br />

                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-titless" data-aos="zoom-out"><u>Team Members</u></h3>
                            <h1 className="main-heading" data-aos="zoom-in-up">
                                Ayush Paul , Antareep Das , Abir Dey , Parag Bhattacharyya , Darpan Biswas , Soumyadeep Das are the students currently pursuing third semester in Computer Science department at Scottish Church College.
                            </h1>
                        </div>
                        <div>
                            <MDBTable align='middle' className="titu">
                                <MDBTableHead>
                                    {/* <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr> */}
                                </MDBTableHead>
                                <MDBTableBody data-aos="zoom-out">
                                    <h3 className="mini-titlesss"><u>Contacts</u></h3>
                                    <tr className="aaa">
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='data:image/png;base64,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'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Address</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>1 & 3, Urquhart Square, Manicktala, Azad Hind Bag, Kolkata,700006</p>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                                    <tr className="aaa">
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://cdn-icons-png.flaticon.com/512/4616/4616089.png'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Email Address</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>paulayus323@gmail.com</p>
                                        </td>

                                    </tr>
                                    <tr className="aaa">
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='data:image/png;base64,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'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Contact Number</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>+917439772170</p>
                                            <p className='fw-normal mb-1'>0332565-5896</p>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutus;