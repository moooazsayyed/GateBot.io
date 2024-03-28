import express from "express";


const router = express.Router();

router.get("/services", getServicesController);