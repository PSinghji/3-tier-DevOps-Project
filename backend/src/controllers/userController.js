const db = require("../config/db");

// Get all users
const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Get user by ID
const getUserById = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

// Create a new user
const createUser = (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User created successfully", userId: results.insertId });
    });
};

// Update an existing user
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    db.query(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [name, email, id],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "User updated successfully" });
        }
    );
};

// Delete a user
const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User deleted successfully" });
    });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };

