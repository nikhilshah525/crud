import React from "react";
import { Table } from "react-bootstrap";

const CrudTable = ({ data = [] }) => {
  return (
    <div className="mt-3">
      <Table className="mb-0" striped size="sm" responsive bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
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
              <td>{singleData.email || "-"}</td>
              <td>{singleData.contact || "-"}</td>
              <td>{singleData.weekDays?.join(",") || "-"}</td>
              <td>{singleData.gender || "-"}</td>
              <td>{singleData.dateOfBirth || "-"}</td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
