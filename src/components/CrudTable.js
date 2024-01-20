import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash3 } from "react-icons/bs";
import CrudForm from "./CrudForm";

const CrudTable = ({ data = [], onDelete, onUpdate }) => {
  const [formObject, setFormObject] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const updateForm = (e) => {
    e.preventDefault();
    onUpdate(formObject);
    hideModal();
  };

  const hideModal = () => {
    setShowUpdateModal(false);
    setFormObject({ gender: "Male" });
  };
  return (
    <div className="mt-3">
      <Table className="mb-0" striped size="sm" responsive bordered>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th className="text-nowrap">Week Days</th>
            <th>Gender</th>
            <th className="text-nowrap">Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleData, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{singleData.name || "-"}</td>
              <td>{singleData.contact || "-"}</td>
              <td>{singleData.email || "-"}</td>
              <td>{singleData.weekDays?.join(",") || "-"}</td>
              <td>{singleData.gender || "-"}</td>
              <td>{singleData.dateOfBirth || "-"}</td>
              <td>
                <BsPencilSquare
                  title="Edit Record"
                  role="button"
                  className="me-2"
                  onClick={() => {
                    setShowUpdateModal(true);
                    setFormObject(singleData);
                  }}
                />
                <BsTrash3
                  title="Delete Record"
                  role="button"
                  onClick={() => onDelete(singleData.userId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {data.length === 0 && (
        <div className="text-center fs-5 fw-bold border p-1 text-white bg-secondary bg-gradient">
          No Record Found
        </div>
      )}

      <Modal onHide={hideModal} show={showUpdateModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrudForm
            formObject={formObject}
            setFormObject={setFormObject}
            submitForm={updateForm}
            onCancel={hideModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CrudTable;
