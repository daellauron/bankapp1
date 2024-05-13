import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import data from '../data/bankUsers.json';
import updateBalance from "../Transfer/Transfer"

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Set the users state with the imported data
    setUsers(data);
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  return (
    <Col lg={7} className='border-left'>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Running Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => ( // Changed from 'users' to 'user' in the map function
            <tr key={user.id}>
              <td className="py-3">{user.id}</td>
              <td className="py-3">{user.name}</td>
              <td className="py-3">{user.email}</td>
              <td className="py-3">{user.password}</td>
              <td className="py-3"></td>
              <td className="py-3"></td>
              <td className="py-3">{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
}

export default Users;
