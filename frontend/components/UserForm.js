import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || "");
    const [email, setEmail] = useState(initialData?.email || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;

