const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getDatabase } = require("../config/database");

const router = express.Router();

// Sign-Up Route
router.post("/signup", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const db = getDatabase();

    // Check if the username already exists
    const existingUser = await db.collection("users").findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user
    await db.collection("users").insertOne({ username, password: hashedPassword, role: role || "user" });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during sign-up:", err);
    res.status(500).json({ error: "Sign-up failed" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const db = getDatabase();

    // Find the user
    const user = await db.collection("users").findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
