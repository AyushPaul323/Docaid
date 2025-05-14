import Sidenav from "./Sidenav";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import './Doctor.css'

function BookNow(props) {
  return (
    <div>
      <Sidenav Pic={props.user.picture} />
      <div className="liss">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th><h4>Name</h4></th>
              <th ><h4>Address</h4></th>
              <th ><h4>Location</h4></th>
              <th ><h4>Bed</h4></th>
              <th><h4>Number of Beds available</h4></th>
              <th><h4>Last Modified</h4></th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td>
                  Ils Hospital
                  </td>
                  <td>Name</td>
                  <td>Specialization</td>
                  <td>location</td>
                  <td>
                  </td>
                </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default BookNow;