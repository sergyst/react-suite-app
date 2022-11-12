// import { Button, Modal, Form, ButtonToolbar, Message } from "rsuite";

// export const AuthModal = (props) => {
//   const handleClose = () => props.setOpen(false);
//   return (
//     <div className="modal-container">
//       <Modal open={props.open} onClose={handleClose}>
//         <Modal.Header>
//           <Modal.Title>
//             {props.isLogin ? "Login Here" : "Signup Here"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form fluid onSubmit={props.isLogin ? props.login : props.signUp}>
//             <Form.Group controlId="email-1">
//               <Form.ControlLabel>Email</Form.ControlLabel>
//               <Form.Control
//                 name="email"
//                 type="email"
//                 onChange={props.setEmail}
//               />
//             </Form.Group>
//             <Form.Group controlId="password-1">
//               <Form.ControlLabel>Password</Form.ControlLabel>
//               <Form.Control
//                 name="password"
//                 type="password"
//                 autoComplete="off"
//                 onChange={props.setPassword}
//               />
//             </Form.Group>
//             <Form.Group>
//               {props.error && (
//                 <Message showIcon type="error">
//                   {props.error}
//                 </Message>
//               )}
//             </Form.Group>
//             <ButtonToolbar>
//               <Button appearance="primary" type="submit">
//                 {props.isLogin ? "Login" : "Signup"}
//               </Button>
//             </ButtonToolbar>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Ok
//           </Button>
//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };


import { Button, Modal, Form, ButtonToolbar, Message } from "rsuite";

export const AuthModal = (props) => {
  console.log("AuthModal. props: ", props);
  const handleClose = () => {
    console.log("handleClose");
    props.setOpen(false);
  }
  return (
    <div className="modal-container">
      <Modal open={props.open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {props.isLogin ? "Login Here" : "Signup Here"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onSubmit={props.isLogin ? props.login : props.signUp}>
            <Form.Group controlId="email-1">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                name="email"
                type="email"
                onChange={props.setEmail}
              />
            </Form.Group>
            <Form.Group controlId="password-1">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                onChange={props.setPassword}
              />
            </Form.Group>
            <Form.Group>
              {props.error && (
                <Message showIcon type="error">
                  {props.error}
                </Message>
              )}
            </Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                {props.isLogin ? "Login" : "Signup"}
              </Button>
            </ButtonToolbar>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">Ok</Button>
          <Button onClick={handleClose} appearance="subtle">Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
