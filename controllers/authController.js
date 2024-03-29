import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import {   hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";


//register user
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (email already exists)
      return res.status(400).send({
        success: false,
        message: "Email already exists, please use a different email",
      });
    }
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
  //POST LOGIN
//POST LOGIN
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

      

      console.log("Token created successfully:", token);
      console.log("User details:", user);

      // Return the token and user details
      return res.status(201).json({ status: "ok", data: { token, user } });
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
  
