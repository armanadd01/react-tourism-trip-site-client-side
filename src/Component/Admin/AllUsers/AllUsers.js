import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <>
            <Container>
                <Row>
                <h1>ALL User {users?.length}</h1>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        {users?.map((pd, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            </tr>
                        </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        </>
    );
};

export default AllUsers;