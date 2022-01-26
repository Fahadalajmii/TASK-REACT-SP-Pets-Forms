import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

function PetCreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [change, setChange] = useState({ type: "Cat" });
  const handleChange = (event) => {
    setChange({ ...change, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(change);
    handleClose();
  };
  console.log(change);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
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
                onChange={handleChange}
                type="text"
                placeholder="Enter name"
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select the category of the pet you want</Form.Label>
              <Form.Select name="type" onChange={handleChange}>
                <option value="Cat">cat</option>
                <option value="Dog">dog</option>
                <option value="Rabbit">rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group class="form-group">
              <Form.Label for="exampleFormControlFile1">
                upload pet image
              </Form.Label>
              <Form.Control
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} type="submit">
              Submit!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PetCreateModal;
