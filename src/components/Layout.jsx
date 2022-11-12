import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import '../container.less';
import { Container, Header, Footer, Content, Message, Nav } from 'rsuite';

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
      <Nav.Item eventKey="home"><Link to="/">Home</Link></Nav.Item>
      <Nav.Item eventKey="dashboard"><Link to="/dashboard">Dashboard</Link></Nav.Item>
      <Nav.Item eventKey="createLoan"><Link to="/createLoan">Create loan</Link></Nav.Item>
      <Nav.Item eventKey="createForm"><Link to="/form">Create form</Link></Nav.Item>
      <Nav.Item eventKey="about"><Link to="/about">About</Link></Nav.Item>
      <Nav.Item eventKey="products"><Link to="/nothing-here">Nothing Here</Link></Nav.Item>
    </Nav>
  );
};

export const Layout = () => {
  const [active, setActive] = React.useState('home');

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}

      <div className="show-container">
        <Container>
          <CustomNav appearance="subtle" active={active} onSelect={setActive} />
          <Container>
            <Header>Header</Header>
            <Content>
              <Outlet />
            </Content>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </div>
    </div>
  );
}