import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the User document
interface IUser extends Document {
    code: string;             // Define code as a string
    createdAt: Date;         // Define createdAt as a Date
    updatedAt: Date;         // Define updatedAt as a Date
}

// Create the User Schema
const userSchema = new Schema<IUser>({
    code: {
        type: String,
        required: true,    // Make code a required field
    },
}, {
    timestamps: true,      // Automatically add createdAt and updatedAt fields
});

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
