"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const route_1 = __importDefault(require("./routes/route")); // Adjust the path if necessary
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        //allowedOrigins
    }
});
app.use((0, cors_1.default)());
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join_room', (room) => {
        socket.join(room);
    });
    socket.on('send-message', (msg, room) => {
        console.log(room, 'roooom');
        socket.to(room).emit('receive-message', msg);
    });
    // socket.on('create_room',(msg)=>{
    //     console.log(msg,'mslgj')
    //     socket.join(msg)
    //     io.to(msg).emit(msg,'hello amalks?')
    // })
});
(0, db_1.default)();
// Middleware to parse JSON request bodies
app.use(express_1.default.json()); // Add this line to parse JSON request bodies
// Use the router
app.use('/', route_1.default);
// Start the server
server.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:4000');
});
