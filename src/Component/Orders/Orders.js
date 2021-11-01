import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const Orders = () => {
    const [order, setOrder] = useState([]);

 
    //get all orders
  useEffect(() => {
    fetch("https://peaceful-bayou-60710.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  
    return (
        <div>
            <Container>
                <h1>Orders {order?.length}</h1>
                <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Order Country</th>
                        <th>User Name</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    {/* order list */}
                    {order?.map((order, index) => (
                    <tbody>
                        <tr>
                        <td>{index}</td>
                        <td>{order.id}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.date}</td>
                        </tr>
                    </tbody>
                    ))}
                </Table>
                </Row>
            </Container>
        </div>
    );
};

export default Orders;