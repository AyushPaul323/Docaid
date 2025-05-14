import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import Sidenav from "./Sidenav";
import './Healthcare.css'

export default function Healthcare(props) {
  React.useEffect(() => {
    AOS.init();
}, []);
  return (
    <div>
      <Sidenav Pic={props.user.picture} />
      <MDBContainer className="py-5">
        <MDBRow className="gx-5">
          <MDBCol md="6" className="mb-4" data-aos="fade-up-right">
            <img
              src="https://thumbs.dreamstime.com/b/good-health-word-cloud-hand-marker-concept-white-background-184068166.jpg"
              className="w-1000"
            />
          </MDBCol>
          <MDBCol md="6" className="mb-444" data-aos="fade-right">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              Healthy Habits, Happy Life: Your Daily Health Care Schedule?
            </span>
            <h4>
              <strong className="huuui">Health is a state of complete harmony of the body, mind and spirit.</strong>
            </h4>
            <p className="hu">
              <br />
              1. Eat a healthy diet: A balanced diet consisting of whole foods, fruits, vegetables, lean proteins, and healthy fats is essential for good health.
              <br />
              <br />
              2. Exercise regularly: Regular physical activity is important for maintaining a healthy weight, reducing the risk of chronic diseases, and improving mental health.
              <br />
              <br />
              3. Get enough sleep: Adequate sleep is essential for physical and mental health. Aim for 7-8 hours of sleep per night.
              <br />
              <br />
              4. Manage stress: Chronic stress can have negative effects on your health. Find healthy ways to manage stress such as exercise, meditation, or talking to a friend or mental health professional.
              <br />
              <br />
              5. Stay hydrated: Drinking enough water is essential for good health. Aim for at least 8-10 glasses of water per day.
              <br />
              <br />
              6. Practice good hygiene: Wash your hands regularly, cover your mouth and nose when coughing or sneezing, and stay home when you're sick to prevent the spread of illness.
              <br />
              <br />
              7. Stay up to date with recommended health screenings: Regular health screenings can help detect diseases early when they are easier to treat.
              <br />
              <br />
              8. Limit alcohol and tobacco use: Excessive alcohol and tobacco use can have negative effects on your health. If you do drink alcohol, do so in moderation and avoid smoking or using tobacco products altogether.


            </p>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="py-5">
        <MDBRow className="gx-5 border-bottom pb-4 mb-5">
        </MDBRow>
        <MDBRow className="gx-lg-5">
          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0" data-aos="flip-left">
            <div>
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src="https://info.primarycare.hms.harvard.edu/hubfs/4.22.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBRow className="mb-3">
                <MDBCol col="6">

                  <MDBIcon fas icon="plane" />
                  <h3 className="me-21">Primary care</h3>

                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 15.07.2020</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <p>
                  One primary health care tip is to maintain a healthy lifestyle by eating a balanced diet, getting regular exercise, and avoiding unhealthy habits like smoking and excessive alcohol consumption. It is also important to stay up to date on recommended health screenings and check-ups with your primary care physician or healthcare provider. Additionally, practicing good hygiene, such as washing your hands regularly and covering your mouth when you cough or sneeze, can help prevent the spread of illnesses. Finally, staying informed about health topics and being an advocate for your own health can also be beneficial in maintaining good health.
                </p>
              </a>
              <hr />
            </div>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0" data-aos="flip-left">
            <div>
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src="https://images.healthshots.com/healthshots/en/uploads/2022/09/01212456/balanced-diet-1600x900.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBRow className="mb-3">
                <MDBCol col="6">
                  <a href="" className="text-danger">
                    <MDBIcon fas icon="chart-pie" />
                    <h3 className="me-21">Nutrition</h3>
                  </a>
                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 12.03.2023</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <p>
                  A nutrition healthcare tip is to focus on consuming a balanced diet that includes a variety of whole foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats. Try to limit highly processed and sugary foods, as well as foods high in saturated and trans fats. It is also important to stay hydrated by drinking plenty of water throughout the day.

                  In addition, pay attention to portion sizes and try to eat mindfully, taking time to savor and enjoy your food. This can help prevent overeating and promote healthy digestion.

                  Consulting with a registered dietitian can alsoplan to meet your specific health needs and goals.
                </p>
              </a>
              <hr />
            </div>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4 mb-lg-0" data-aos="flip-left">
            <div>
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/16205355/fitness-myths-hero-1600x900.jpg"
                  className="img-fluid"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBRow className="mb-3">
                <MDBCol col="6">
                  <a href="" className="text-warning">
                    <MDBIcon fas icon="code" />
                    <h3 className="me-21">Fitness</h3>
                  </a>
                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 12.03.2023</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <p>
                  A fitness and physical activity healthcare tip is to aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity aerobic exercise per week. This can be achieved through activities such as brisk walking, running, cycling, swimming, or dancing. Additionally, incorporating strength training exercises at least two days per week can help build and maintain muscle mass and bone density.
                  It is important to choose activities that you enjoy and that fit into your lifestyle, as this can increase the likelihood of sticking with an exercise routine. Starting slowly and gradually increasing intensity.
                </p>
              </a>
              <hr />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="hiiii" data-aos="zoom-in">
        <MDBContainer>
          <MDBCard style={{ width: "126.9rem" }} className="hiii">
            <div className="border border-left border-right px-0">
              <div className="p-3 border-bottom">
                <h4 className="d-flex align-items-center mb-0">
                  Community Section
                  <MDBIcon
                    far
                    icon="star"
                    size="xs"
                    color="primary"
                    className="ms-auto"
                  />
                </h4>
              </div>
              <MDBCard className="shadow-0 gu">
                <MDBCardBody className="border-bottom pb-2">
                  <div className="d-flex">
                    <img
                      src={props.user.picture}
                      className="rounded-circle"
                      height="50"
                      alt="Avatar"
                      loading="lazy"
                    />
                    <div className="d-flex align-items-center w-100 ps-3">
                      <div className="w-100">
                        <input
                          type="text"
                          id="form1"
                          className="form-control form-status border-0 py-1 px-0 gu"
                          placeholder="What's happening"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <MDBTypography
                      listUnStyled
                      className="d-flex flex-row ps-3 pt-3"
                      style={{ marginLeft: "50px" }}
                    >
                      <li>
                        <a href="#!">
                          <MDBIcon far icon="image" className="pe-2" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <MDBIcon fas icon="photo-video" className="px-2" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <MDBIcon fas icon="chart-bar" className="px-2" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <MDBIcon far icon="smile" className="px-2" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <MDBIcon far icon="calendar-check" className="px-2" />
                        </a>
                      </li>
                    </MDBTypography>
                    <div className="d-flex align-items-center">
                      <MDBBtn rounded>Tweet</MDBBtn>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
              <div className="d-flex p-3 border-bottom">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex w-100 ps-3">
                  <div>
                    <a href="#!">
                      <h6 className="text-body">
                        Miley Cyrus
                        <span className="small text-muted font-weight-normal mx-1">
                          @mileycyrus
                        </span>
                        <span className="small text-muted font-weight-normal me-1">
                          •
                        </span>
                        <span className="small text-muted font-weight-normal me-1">
                          2h
                        </span>
                        <span>
                          <MDBIcon fas icon="angle-down" className="float-end" />
                        </span>
                      </h6>
                    </a>
                    <p style={{ lineHeight: "1.2" }}>
                      Awesome website nice interface and nicely organised community section to connect people all around the world.
                    </p>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-between mb-0 pe-xl-5"
                    >
                    </MDBTypography>
                  </div>
                </div>
              </div>
              <div className="d-flex p-3 border-bottom">
                <img
                  src="https://res.cloudinary.com/dsoss1f0t/image/upload/v1680500763/fotor_2023-4-3_11_12_47_gq86rf.png"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex w-100 ps-3">
                  <div>
                    <a href="#">
                      <h6 className="text-body">
                        Ayushpaul
                        <span className="small text-muted font-weight-normal mx-1">
                          @ayushpaul323
                        </span>
                        <span className="small text-muted font-weight-normal me-1">
                          •
                        </span>
                        <span className="small text-muted font-weight-normal me-1">
                          3h
                        </span>
                        <span>
                          <MDBIcon fas icon="angle-down" className="float-end" />
                        </span>
                      </h6>
                    </a>
                    <p style={{ lineHeight: "1.2" }}>
                      Scientists Develop New Blood Test for Detecting Early Stage Cancer.
                    </p>

                    <MDBCard
                      className="border mb-3 shadow-0 "
                      style={{ maxWidth: "540px" }}
                    >
                      <MDBRow className="g-0 gu">
                        <MDBCol md="3">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOgvOgGuCYUqs0kUcESqH2knJ8OGMF8ALdQ&usqp=CAU"
                            alt="Avatar"
                            className="img-fluid rounded-left sqw"
                            width={250}
                          />
                        </MDBCol>
                        <MDBCol md="9">
                          <MDBCardBody>
                            <MDBCardText style={{ lineHeight: "1" }}>
                              HEALTH ISSUE
                            </MDBCardText>
                            <MDBCardText
                              className="small mb-0"
                              style={{ lineHeight: "1.2" }}
                            >
                              A team of scientists has recently developed a new blood test for detecting early stage cancer. The test, called CancerSEEK, works by analyzing blood samples for certain proteins and genetic mutations that are commonly associated with different types of cancer.
                            </MDBCardText>
                            
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </div>
                </div>
              </div>
              </div>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}