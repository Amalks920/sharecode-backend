import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Room document
interface IRoom extends Document {
    name:string,
    userIds: mongoose.Types.ObjectId[]; // Array of ObjectIds
    content: string;                     // Define content as a string
}

// Create the Room Schema
const roomSchema = new Schema<IRoom>({
    name:{
        type:String
    },
    userIds: [{
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true, // Make userIds required
    }],
    content: {
        type: String,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the Room model
const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;
