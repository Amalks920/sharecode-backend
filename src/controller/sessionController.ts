import { Response, Request } from 'express';
import { cacheStringHelper, createRoomSessionHelper, createUserSessionHelper, generateCodeHelper } from '../helper/sessionHelper';
import { Document } from 'mongoose';

// Define the shape of the request body, if it's a simple object like { code: string }
interface CreateUserSessionRequest extends Request {
  body: {
    code: string;
  };
}

// Define the type for the User document returned by `createUserSessionHelper`
// interface UserSession extends Document {
//   _id: string;
//   code: string;
//   createdAt: Date;
//   updatedAt: Date;
//   // Add any other relevant fields from the User document
// }

// Define the type for the Room document returned by `createRoomSessionHelper`

// interface RoomDetails extends Document {
//   _id: string;
//   name: string;
//   userIds: string[];  // Array of user IDs
//   content?: string;   // Optional content field
//   createdAt: Date;
//   updatedAt: Date;
//   // Add any other relevant fields from the Room document
// }

export const createUserSession = async (
  req: CreateUserSessionRequest,
  res: Response
): Promise<void> => {
  try {
    const { code } = req.body;

    // Return full user document from the helper
    const user: any = await createUserSessionHelper(code);

    // Return full room document from the helper
    const room: any = await createRoomSessionHelper(user._id);

    // Send the full room document in the response
    res.status(200).json({ room });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};


export const generateCode = async (req:Request,res:Response) =>{

  try {
    
    const code:string = await generateCodeHelper()
    res.status(200).json({code})
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
}







