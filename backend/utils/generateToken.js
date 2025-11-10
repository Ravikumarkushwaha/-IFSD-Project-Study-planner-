const jwt = require("jsonwebtoken");

// Function to generate JWT Token
const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    console.error("❌ JWT_SECRET is missing! Please check your .env file.");
    throw new Error("JWT Secret not found");
  }

  // Generate token valid for 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = generateToken;
