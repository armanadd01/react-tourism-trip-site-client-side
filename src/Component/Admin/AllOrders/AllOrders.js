import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);

    return (
        <div>
            <Container>
                <Row>
                <h1>ALL Orders {orders?.length}</h1>
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
                        {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            <button className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        </div>
    );
};

export default AllOrders;