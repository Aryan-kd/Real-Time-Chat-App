const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

const PORT = 8000;

// Socket.io
io.on("connection", (socket) => {
  // console.log("User start connection ", socket.id);

  socket.on("chat", (payload) => {
    // console.log("Payload: ", payload);
    io.emit("chat", payload);
  });
});

// app.use(express.static(path.resolve("./public")));

// app.get("/", (req, res) => {
//   return res.sendFile("/public/index.html");
// });

server.listen(PORT, () => {
  console.log(`Server is running to port http://localhost:${PORT}`);
});
