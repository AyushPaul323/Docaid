import Sidenav from "./Sidenav";
import Table from "react-bootstrap/Table";
import { data } from "./data.js";
import { useState } from "react";
import './Doctor.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React from "react";
function Doctor(props) {
  const [search, setSearch] = useState("");
  console.log(search);
  React.useEffect(() => {
    AOS.init();
}, []);
  return (
    <div>
      <Sidenav Pic={props.user.picture} />
      <div className="liss" data-aos="zoom-out">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th><h3>Profile</h3></th>
              <th><h3>Name</h3></th>
              <th className="s1w"><h3>Qualification</h3></th>
              <th className="s1w"><h3>Chamber</h3></th>
              <th className="s1w"><h3>Days</h3></th>
              <th className="s1w"><h3>Time</h3></th>
              <div class="serc">
        <input
          type="search"
          class="search11"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for specialization"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.Specialization.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr data-aos="flip-up">
                  <td>
                  {item.Profile}
                  </td>
                  <td>{item.Name}</td>
                  <td>{item.Specialization}</td>
                  <td>{item.location}</td>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td ><a href={item.url}><button className="a11" >
                    Book Now</button></a></td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Doctor;
