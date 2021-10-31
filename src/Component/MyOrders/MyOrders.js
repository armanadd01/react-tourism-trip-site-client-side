import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
      
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
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

  console.log(orders)
    return (
        <>
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
                            <button
                            onClick={() => handleDelete(pd._id)}
                            className="btn btn-outline-danger  p-2"
                        >
                            Delete
                        </button> 
                            </tr>
                        </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
            
        </>
    );
};

export default MyOrders;