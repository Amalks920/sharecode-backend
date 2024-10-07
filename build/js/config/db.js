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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(process.env.MONGODB_URL_STRING);
        // Define the connection string with a fallback in case MONGODB_URL_STRING is undefined
        const connectionString = process.env.MONGODB_URL_STRING;
        // Use async/await syntax to ensure the connection completes
        yield mongoose_1.default.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); // Providing proper types for connection options
        console.log('Connection successful');
    }
    catch (error) {
        console.log(`Connection failed: ${error}`);
    }
});
exports.default = dbConnect;
