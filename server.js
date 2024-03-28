import cors from 'cors';
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create the Express app
const app = express();
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  
// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/gatebot/auth", authRoutes);
app.use("/api/gatebot/category", categoryRoutes);
app.use("/api/gatebot/services",servicesRoutes)
// Root route
app.get("/", (req, res) => {
   res.send("<h1>Welcome to ecommerce app</h1>");
});

// Define the port
const PORT = process.env.PORT || 8005;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgGreen.white);
});