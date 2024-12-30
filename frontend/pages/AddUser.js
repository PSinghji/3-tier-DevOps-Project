import React from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../services/userService";

const AddUser = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        await createUser(data);
        navigate("/");
    };

    return (
        <div>
            <h2>Add User</h2>
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddUser;

