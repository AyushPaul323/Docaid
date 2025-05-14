import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup, 
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
export default function Nave(props) {
  const logout = () => {
    window.open(`http://localhost:3000/7439772170`, "_self");
};


  return (
    <div className='navv'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='logoss'>
      <a class="logoss1" href="#">
      <img src='https://res.cloudinary.com/dxxjc0u2h/image/upload/v1678007680/Screenshot__649_-removebg-preview_qgvsmh.png' 
          width="90"
          height="70"
          loading="lazy"
        />
      </a></div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/admin">Home</a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <div class="pic">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
        </a>
      </div>
      <div className='log1222'>
          <button onClick={logout} className='a11' >
                Log Out
            </button>
          </div>
    </div>
  </div>
</nav>
</div>
  );
}