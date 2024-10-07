"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = exports.createUserSession = void 0;
const sessionHelper_1 = require("../helper/sessionHelper");
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
const createUserSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.body;
        // Return full user document from the helper
        const user = yield (0, sessionHelper_1.createUserSessionHelper)(code);
        // Return full room document from the helper
        const room = yield (0, sessionHelper_1.createRoomSessionHelper)(user._id);
        // Send the full room document in the response
        res.status(200).json({ room });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
});
exports.createUserSession = createUserSession;
const generateCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const code = yield (0, sessionHelper_1.generateCodeHelper)();
        res.status(200).json({ code });
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
});
exports.generateCode = generateCode;
