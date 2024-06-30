// Import Files
import express from "express";

// Database
import "./db/connection.js";

// Schemas Import
import Users from "./models/Users.js";

// Port
const PORT = 8000 || process.env.PORT;

// Apps
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.post("api/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.status(400).send("Please fill all required fields");
    } else {
      const isAlreadyExist = await Users.findOne({ email });
      if (isAlreadyExist) {
        res.status(400).send("User already exists");
      } else {
        const newUser = new Users({
          fullName: fullName,
          email: email,
          password: password,
        });
      }
    }
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Server is running to port ${PORT}`);
});
