import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Nav() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      <MDBIcon fas icon="angle-double-left" />
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <MDBBtn color='light' rippleColor='dark'>
        all Products
      </MDBBtn>
      <MDBBtn color='dark'>
        add to cart
      </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}