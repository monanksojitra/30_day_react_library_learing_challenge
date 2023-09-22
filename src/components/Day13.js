import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f8f9fa;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const TableHeaderCell = styled.th`
  padding: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 15px;
  &.badge-success {
    background-color: #28a745;
    color: #fff;
  }
  &.badge-primary {
    background-color: #007bff;
    color: #fff;
  }
  &.badge-warning {
    background-color: #ffc107;
    color: #000;
  }
`;

const ButtonLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    color: darkblue;
  }
`;

const Day13 = () => {
  return (
    <Table className="table align-middle mb-0 bg-white">
      <TableHead className="bg-light">
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Position</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <tbody>
        <TableRow>
          <TableCell>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">John Doe</p>
                <p className="text-muted mb-0">john.doe@gmail.com</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </TableCell>
          <TableCell>
            <Badge className="badge-success rounded-pill d-inline">
              Active
            </Badge>
          </TableCell>
          <TableCell>Senior</TableCell>
          <TableCell>
            <ButtonLink>Edit</ButtonLink>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">liv ranox</p>
                <p className="text-muted mb-0">livsnnn@gmail.com</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </TableCell>
          <TableCell>
            <Badge className="badge-success rounded-pill d-inline">
              Active
            </Badge>
          </TableCell>
          <TableCell>Senior</TableCell>
          <TableCell>
            <ButtonLink>Edit</ButtonLink>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">sweety dox</p>
                <p className="text-muted mb-0">doxxxrst@gmail.com</p>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <p className="fw-normal mb-1">Software engineer</p>
            <p className="text-muted mb-0">IT department</p>
          </TableCell>
          <TableCell>
            <Badge className="badge-success rounded-pill d-inline">
              Active
            </Badge>
          </TableCell>
          <TableCell>Senior</TableCell>
          <TableCell>
            <ButtonLink>Edit</ButtonLink>
          </TableCell>
        </TableRow>
        
      </tbody>
    </Table>
  );
};

export default Day13;
