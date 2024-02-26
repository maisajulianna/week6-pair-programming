require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoTaskRouter = require("./routers/todoTaskRouter");  
const customMiddleware = require("./middleware/customMiddleware");

// Express app
const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running!"));


app.use(customMiddleware.requestLogger);
app.use(customMiddleware.unknownEndpoint);
app.use(customMiddleware.errorHandler);

app.use("/api/todoTasks", todoTaskRouter);


const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);