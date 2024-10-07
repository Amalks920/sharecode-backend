"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create the cache schema with TTL index
const cacheSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // TTL index to remove document after 24 hours
    },
});
// Create the cache model
const Cache = (0, mongoose_1.model)('Cache', cacheSchema);
exports.default = Cache;
