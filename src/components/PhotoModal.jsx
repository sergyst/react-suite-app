import { Button, Modal, Form, ButtonToolbar } from "rsuite";
export const PhotoModal = (props) => {
  const handleClose = () => props.setOpenModal(false);
  return (
    <div className="modal-container">
      <Modal open={props.openModal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onSubmit={props.addPhoto}>
            <Form.Group controlId="name">
              <Form.Group controlId="name">
                <Form.ControlLabel>Image URL</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(input) => props.setName(input)}
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Group controlId="image">
                <Form.ControlLabel>Image URL</Form.ControlLabel>
                <Form.Control
                  name="name"
                  value="XXX"
                  onChange={(input) => props.setPhoto(input)}
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
            </Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Create
              </Button>
            </ButtonToolbar>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
