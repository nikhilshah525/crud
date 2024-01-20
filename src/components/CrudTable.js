import React from "react";
import { Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash3 } from "react-icons/bs";

const CrudTable = ({ data = [], onDelete, onUpdate }) => {
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
                  onClick={() => onUpdate(singleData)}
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
    </div>
  );
};

export default CrudTable;
