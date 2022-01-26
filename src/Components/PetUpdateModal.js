import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

function PetUpdateModal({ defaultPet }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [update, setUpdate] = useState(defaultPet);
  const handleUpdate = (event) => {
    setUpdate({ ...update, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.UpdatePet(update);
    handleClose();
  };
  console.log(update);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>name</Form.Label>
              <Form.Control
                name="name"
                value={update.name}
                onChange={handleUpdate}
                type="text"
                placeholder="Enter name"
              />
              <Form.Text className="text-muted">
                change the name of the pet!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select the category of the pet </Form.Label>
              <Form.Select
                value={update.type}
                name="type"
                onChange={handleUpdate}
              >
                <option value="Cat">cat</option>
                <option value="Dog">dog</option>
                <option value="Rabbit">rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group class="form-group">
              <Form.Label for="exampleFormControlFile1">pet image</Form.Label>
              <Form.Control
                type="text"
                value={update.image}
                class="form-control-file"
                id="exampleFormControlFile1"
                name="image"
                onChange={handleUpdate}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} type="update">
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PetUpdateModal;
