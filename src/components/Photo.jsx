import { Row, Col } from "rsuite";

export const Photo = (props) => {
  return (
    <Row>
      {props.photos.map((photo) => {
        return (
          <Col md={4} key={photo.id}>
            <img
              src={photo.URL}
              alt={photo.name}
              onClick={() => props.setOpenModal(true)}
            />
          </Col>
        );
      })}
    </Row>
  );
};
