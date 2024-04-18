import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export default function Card() {

    const items = useSelector((state)=>state.allcart.items)

    
  return (
    <MDBContainer>
        <MDBRow className='mb-3'>

         { items.map((item)=>( 
            <MDBCol size='3' className='mt-2'>
            <MDBCard>
          <MDBCardImage src={item.img}
           position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{item.id}</MDBCardTitle>
            <MDBCardText>
             {item.name}
             <h2>{item.price}</h2>
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>


         ))
         
    }
    </MDBRow>
    </MDBContainer>
   
  );
}