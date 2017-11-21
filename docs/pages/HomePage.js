import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>Event Sign In DEMO</strong></h2>
                <p className="pb-4">Written by Mohith Rao</p>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <p className="text-center">Manage all members in one place!</p>
              <p className="text-center">Create new members using the interface!</p>
              <p className="text-center">Updates and more features are in the works!</p>
              <hr/>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
