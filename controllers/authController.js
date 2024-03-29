import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import {   hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";




// Register controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, role, wing, flatNo, securityQuestion, secretKey } = req.body;
    // Validations
    if (!name || !email || !password || !phone || !address || !answer || !securityQuestion) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists, please use a different email" });
    }

    // Hash and salt the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user object
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword, // Store the hashed password
      phone,
      address,
      answer,
      role: role === 1 ? 1 : 0, // Set role to 1 for admin, 0 for user
      wing: role === 0 ? wing : null, // Include wing and flatNo only for users
      flatNo: role === 0 ? flatNo : null,
      secretKey: role === 1 ? secretKey : null, // Include secretKey only for admins
      securityQuestion,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).send({ message: "Registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Error in Registration" });
  }
};



//POST LOGIN
// POST LOGIN
export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = JWT.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const isAdmin = user.role === 1; // Check if the user is an admin

      console.log("Token created successfully:", token);
      console.log("User details:", user);

      // Return the token, isAdmin status, and user details
      return res.status(201).json({ status: "ok", data: { token, isAdmin, user } });
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getUserDataController = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]; // Extract the token from the Authorization header
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET); // Verify the token
    const user = await userModel.findOne({ email: decoded.email }); // Find the user based on the decoded email
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return user data
    return res.status(200).json({ status: "ok", data: user });
  } catch (error) {
    if (error instanceof JWT.JsonWebTokenError) {
      console.error("Invalid JWT token:", error);
      return res.status(401).json({ error: "Invalid token" });
    }
    console.error("Error getting user data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
  //test controller
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };

  export const forgotPasswordController = async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  
