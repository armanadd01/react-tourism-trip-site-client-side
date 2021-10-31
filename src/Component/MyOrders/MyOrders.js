import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const { user } = useFirebase();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
    return (
        <>
            <Container className="text-center">

                <h1>My events : {orders.langhts}</h1>
            </Container>
            
        </>
    );
};

export default MyOrders;