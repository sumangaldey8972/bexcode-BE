"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timezone = void 0;
const mongoose_1 = require("mongoose");
// defining Collection Schemas
const timezoneSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    offset: { type: Number, required: true }
});
exports.Timezone = (0, mongoose_1.model)("Timezone", timezoneSchema);
