import React from 'react';
import { Button } from 'react-bootstrap';

const AllUser = ({ user }) => {
    const { email } = user;


    return (
        <tr>
            <td>{email}</td>
            <td><Button variant="primary" size="sm">
                Make Admin
            </Button></td>
            <td><Button variant="danger" size="sm">
                Delete User
            </Button></td>
        </tr>
    );
};

export default AllUser;