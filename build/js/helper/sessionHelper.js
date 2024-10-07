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
exports.generateCodeHelper = exports.cacheStringHelper = exports.createRoomSessionHelper = exports.createUserSessionHelper = void 0;
const room_1 = __importDefault(require("../models/room"));
const user_1 = __importDefault(require("../models/user"));
const cache_1 = __importDefault(require("../models/cache"));
const random_code_1 = __importDefault(require("@codedipper/random-code"));
const createUserSessionHelper = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default({ code });
        yield user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.createUserSessionHelper = createUserSessionHelper;
const createRoomSessionHelper = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = new room_1.default({ _id });
        yield room.save();
        return room;
    }
    catch (error) {
        throw error;
    }
});
exports.createRoomSessionHelper = createRoomSessionHelper;
const cacheStringHelper = (str) => __awaiter(void 0, void 0, void 0, function* () {
    const cacheEntry = new cache_1.default({ value: str });
    yield cacheEntry.save();
    console.log('String cached:', str);
});
exports.cacheStringHelper = cacheStringHelper;
const generateCodeHelper = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, random_code_1.default)(6);
});
exports.generateCodeHelper = generateCodeHelper;
