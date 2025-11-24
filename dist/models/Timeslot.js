"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeslot = void 0;
const mongoose_1 = require("mongoose");
const timeslotSchema = new mongoose_1.Schema({
    utc: { type: String, required: true }
});
exports.Timeslot = (0, mongoose_1.model)("Timeslot", timeslotSchema);
