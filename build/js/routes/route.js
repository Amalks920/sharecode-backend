"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessionController_1 = require("../controller/sessionController");
const router = express_1.default.Router();
router.post('/create-session', sessionController_1.createUserSession);
router.get('/generate-code', sessionController_1.generateCode);
exports.default = router;
