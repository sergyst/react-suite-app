import "rsuite/dist/rsuite.min.css";
import { Navbar, Nav, Header, Container, Content } from "rsuite";
import { useState } from "react";
import { AuthModal } from "./components/AuthModal";
import { Photo } from "./components/Photo";
import { PhotoModal } from "./components/PhotoModal";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUser] = useState([]);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);

  const login = () => {
    const foundUser = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (foundUser.length > 0) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError("Email or Password is incorrect");
    }
  };
  const signUp = () => {
    setUser([...users, { email, password }]);
  };
  const openLogin = () => {
    setOpen(true);
    setIsLogin(true);
  };

  const openSignup = () => {
    setOpen(true);
    setIsLogin(false);
  };

  const addPhoto = () => {
    setPhotos([...photos, { name, URL: photo }]);
  };

  const openPhotoModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="show-fake-browser navbar-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar>
              <Nav>
                <Nav.Item>Gallary</Nav.Item>
                {isLoggedIn && <Nav.Item onClick={openPhotoModal}>Create New</Nav.Item>}
              </Nav>
              <Nav pullRight>
                <Nav.Item onClick={openLogin}>Login</Nav.Item>
                <Nav.Item onClick={openSignup}>Signup</Nav.Item>
              </Nav>
            </Navbar>
          </Navbar>
        </Header>
        <Content>
          <AuthModal
            open={open}
            setOpen={setOpen}
            isLogin={isLogin}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            login={login}
            signUp={signUp}
          />
          {isLoggedIn && <Photo photos={photos} setOpenModal={setOpenModal}></Photo>}
          <PhotoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            addPhoto={addPhoto}
            setPhoto={setPhoto}
            setName={setName}
          />
        </Content>
      </Container>
    </div>
  );
}

export default App;
