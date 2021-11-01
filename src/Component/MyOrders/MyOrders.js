import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';


const MyOrders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch(`https://peaceful-bayou-60710.herokuapp.com/myorder/${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
      
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://peaceful-bayou-60710.herokuapp.com/deleteOrder/${id}`, {
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
                <h1>My Orders: {orders?.length}</h1>
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
                        {orders?.map((myorder, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{myorder?.name}</td>
                            <td>{myorder?.email}</td>
                            <td>{myorder?.date}</td>
                            <td>
                              <button
                              onClick={() => handleDelete(myorder?._id)}
                              className="btn btn-outline-danger  p-2"
                              >
                              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                          </button> 
                            </td> 
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