import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { getUser, updateUser } from "../services/userService";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const response = await getUser(id);
        setInitialData(response.data);
    };

    const handleSubmit = async (data) => {
        await updateUser(id, data);
        navigate("/");
    };

    return (
        <div>
            <h2>Edit User</h2>
            {initialData && <UserForm onSubmit={handleSubmit} initialData={initialData} />}
        </div>
    );
};

export default EditUser;

