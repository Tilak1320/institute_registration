require("dotenv").config();
const express = require ("express");
const app = express();
const registrationRoutes = require("./routes/registrationRoutes");


app.use(express.json());
app.use("/api", registrationRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
