require("dotenv").config();
const express = require("express");
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { connectDB } = require("./config/db");
const cors = require("cors"); // use to connect react and nodejs

