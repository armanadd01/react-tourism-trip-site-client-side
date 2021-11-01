import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const DeleteUsers = () => {
    const [users, setUser] = useState([]);

  const [control, setControl] = useState(false);
//get all users
  useEffect(() => {
    fetch("https://peaceful-bayou-60710.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [control]);
  //delete all users
  const handleDelete = (id) => {
    fetch(`https://peaceful-bayou-60710.herokuapp.com/deleteusers/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          if(window.confirm('Are You Sure to Delete User')){
            setControl(!control);
          }
          
        } else {
          setControl(false);
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
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        {users?.map((user, index) => (
                        <tbody>
                            <tr>
                            <td>{index}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                              <img className="rounded-circle" 
                              style={{height: "30px",
                                width: "30px",
                            }} 
                            src={user?.img} alt="" />
                              </td>
                            <td>
                            <button
                            onClick={() => handleDelete(user._id)}
                            className="btn bg-outline-danger p-2"
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
        </div>
    );
};

export default DeleteUsers;