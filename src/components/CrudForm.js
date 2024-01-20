import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CrudForm = ({ formObject, setFormObject, submitForm }) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const gender = ["Male", "Female"];

  useEffect(() => {
    console.log(formObject);
  }, [formObject]);

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormObject({ ...formObject, [name]: value });
  };

  const checkChangeValue = (day) => {
    const { weekDays = [] } = { ...formObject };
    let data = [];
    if (weekDays?.includes(day)) {
      data = weekDays.filter((selectedDay) => selectedDay !== day);
    } else {
      data = [...weekDays, day];
    }
    setFormObject({ ...formObject, weekDays: data });
  };

  const radioChangeValue = (gender) => {
    setFormObject({ ...formObject, gender });
  };

  return (
    <div className="row">
      <Form onSubmit={submitForm}>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            size="sm"
            name="name"
            placeholder="Enter Name"
            value={formObject.name || ""}
            onChange={changeValue}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            size="sm"
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formObject.email || ""}
            onChange={changeValue}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            required
            size="sm"
            type="number"
            placeholder="Enter Contact"
            name="contact"
            value={formObject.contact || ""}
            onChange={changeValue}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Week Days</Form.Label>
          <div className="d-flex flex-wrap ">
            {daysOfWeek.map((day) => (
              <Form.Check
                key={day}
                type="checkbox"
                label={day}
                className="me-3"
                checked={formObject.weekDays?.includes(day)}
                onChange={() => checkChangeValue(day)}
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Gender</Form.Label>
          <div className="d-flex flex-wrap ">
            {gender.map((gender) => (
              <Form.Check
                key={gender}
                type="radio"
                label={gender}
                className="me-3"
                checked={gender === formObject.gender}
                onChange={() => radioChangeValue(gender)}
              />
            ))}
          </div>
        </Form.Group>
        <Form.Group as={Col} md="12" className="mb-2">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            required
            size="sm"
            type="date"
            placeholder="Enter Email"
            name="dateOfBirth"
            value={formObject.dateOfBirth || ""}
            onChange={changeValue}
          />
        </Form.Group>
        <div className="col-md-12 ">
          <div className="text-end mt-2">
            {formObject.userId && (
              <Button size="sm" type="reset" variant="danger" className="me-2">
                Cancel
              </Button>
            )}

            <Button size="sm" type="submit" variant="success">
              {formObject.userId ? "Update" : "Submit"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CrudForm;
