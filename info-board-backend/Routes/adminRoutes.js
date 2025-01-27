const express = require("express");
const { ObjectId } = require("mongodb"); // To handle MongoDB ObjectId
const { getDatabase } = require("../config/database");
const authenticateToken = require("../middleware/authenticateToken");
const authorizeRole = require("../middleware/authorizeRole");

const router = express.Router();

// Get all users
router.get("/users", authenticateToken, authorizeRole("admin"), async (req, res) => {
  try {
    const db = getDatabase();
    const users = await db.collection("users").find({}, { projection: { password: 0 } }).toArray(); // Exclude password
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Update user role
router.put("/users/:id/role", authenticateToken, authorizeRole("admin"), async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;
    const db = getDatabase();

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Update the user's role
    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { role } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Log the action
    await db.collection("auditLogs").insertOne({
      action: "Updated user role",
      performedBy: req.user.id,
      details: { updatedUserId: userId, newRole: role },
      timestamp: new Date(),
    });

    res.json({ success: true, message: "User role updated successfully" });
  } catch (err) {
    console.error("Error updating user role:", err);
    res.status(500).json({ error: "Failed to update user role" });
  }
});

// Delete a user
router.delete("/users/:id", authenticateToken, authorizeRole("admin"), async (req, res) => {
  try {
    const userId = req.params.id;
    const db = getDatabase();

    // Delete the user
    const result = await db.collection("users").deleteOne({ _id: new ObjectId(userId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Log the action
    await db.collection("auditLogs").insertOne({
      action: "Deleted user",
      performedBy: req.user.id,
      details: { deletedUserId: userId },
      timestamp: new Date(),
    });

    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
