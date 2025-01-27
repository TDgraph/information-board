const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for frontend requests

// In-memory user storage for simplicity (use a database like MongoDB or MySQL in production)
let users = [];

// JWT Secret Key
const SECRET_KEY = "your_jwt_secret_key";

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email is already registered
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) return res.status(409).json({ message: "Email already registered" });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user
  const newUser = { username, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: "User signed up successfully!" });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  // Compare the password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: "Invalid password" });

  // Generate JWT
  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  res.status(200).json({ token, message: "Login successful!" });
});

// Protected Route Example (Verify JWT Token)
app.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: "Access granted", user: verified });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
