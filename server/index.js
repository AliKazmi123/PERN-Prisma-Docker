import express from "express";

import cors from 'cors'
import  userManagementRouter  from "./routes/User/userManagement.js";

const app = express();
app.use(cors())

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/users", userManagementRouter);

//start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
