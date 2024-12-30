import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../services/userService";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        loadUsers(); // Refresh the list
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <Link to={`/edit-user/${user.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

