import express from 'express';
import dbConnect from './config/db';
import router from './routes/route'; // Adjust the path if necessary
import { createServer } from 'http';
import {Server} from 'socket.io'
import cors from 'cors'

const app = express();
const server=createServer(app)
const io = new Server(server,
    {
            cors:{
            origin:"http://localhost:3000",
            methods: ["GET", "POST"],
            //allowedOrigins
        }
    },
);


app.use(cors())


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join_room',(room)=>{
        socket.join(room)
    })
    socket.on('send-message',(msg,room)=>{
        console.log(room,'roooom')
        socket.to(room).emit('receive-message',msg)
    })


    // socket.on('create_room',(msg)=>{
    //     console.log(msg,'mslgj')
    //     socket.join(msg)
    //     io.to(msg).emit(msg,'hello amalks?')
    // })

  
})





dbConnect();

// Middleware to parse JSON request bodies
app.use(express.json()); // Add this line to parse JSON request bodies

// Use the router
app.use('/', router);

// Start the server
server.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:4000');
});



