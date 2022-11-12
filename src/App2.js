import React from 'react';
// import ReactDOM from 'react-dom';
import './styles.css';
import "./App.css";

import './container.less';
import { Container, Header, Footer, Content, Message, Nav } from 'rsuite';

import { About } from './components/About';
import { LoansTable } from './components/LoansTable';

///{/* <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{ width: 100 }}> */}

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect}>
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

const App = () => {
  const [active, setActive] = React.useState('home');

  return (
    <div className="show-container">
      <Container>
        <CustomNav appearance="subtle" active={active} onSelect={setActive} />
        <Container>
          <Header>Header</Header>
          <Content>
            {active === "home" && <Message showIcon type="error">Error</Message>}
            {active === "news" && <Message showIcon type="success">Success</Message>}
            {active === "solutions" && <LoansTable />}
            {active === "about" && <About />}
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    </div>
  );
};

export default App;
