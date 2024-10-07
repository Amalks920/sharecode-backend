import Room from "../models/room";
import User from "../models/user";
import Cache from "../models/cache";
import gen  from "@codedipper/random-code"


export const createUserSessionHelper=async (code:string)=>{

try {
    const user = new User({ code });
    await user.save();

    return user 
} catch (error) {
    throw error
}

}

export const createRoomSessionHelper = async (_id:string)=>{
    try {
        const room = new Room({ _id });
        await room.save(); 
        return room
    } catch (error) {
        throw error
    }
}



export const cacheStringHelper = async (str: string): Promise<void> => {
    const cacheEntry = new Cache({ value: str });
    await cacheEntry.save();
    console.log('String cached:', str);
  };
  


  export const generateCodeHelper = async () =>{

    return gen(6)
  }