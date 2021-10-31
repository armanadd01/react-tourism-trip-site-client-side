import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const DeleteUsers = () => {
    const [users, setUser] = useState([]);

  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("https://peaceful-bayou-60710.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`https://peaceful-bayou-60710.herokuapp.com/deleteusers/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };
    return (
        <div>
             <Container>
                <Row>
                <h1>ALL Users {users?.length}</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        {users?.map((pd, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                        <button
                            onClick={() => handleDelete(pd._id)}
                            className="btn bg-danger p-2"
                        >
                            Delete
                        </button>
                        </tr>
                    </tbody>
                    ))}
                </Table>
                </Row>
            </Container>
        </div>
    );
};

export default DeleteUsers;