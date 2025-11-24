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
const Timezone_1 = require("../models/Timezone");
const Timeslot_1 = require("../models/Timeslot");
dotenv_1.default.config();
const TIMEZONES = [
    { id: "PT", name: "Pacific Time", offset: -8 },
    { id: "MT", name: "Mountain Time", offset: -7 },
    { id: "CT", name: "Central Time", offset: -6 },
    { id: "ET", name: "Eastern Time", offset: -5 },
    { id: "AKT", name: "Alaska Time", offset: -9 },
    { id: "HAT", name: "Hawaii-Aleutian Time", offset: -10 },
    { id: "IST", name: "India Standard Time", offset: 5.5 },
    { id: "CST", name: "China Standard Time", offset: 8 }
];
const TIMESLOTS = [
    "2025-01-23T00:00:00Z", "2025-01-23T02:00:00Z", "2025-01-23T04:00:00Z",
    "2025-01-23T06:00:00Z", "2025-01-23T08:00:00Z", "2025-01-23T10:00:00Z",
    "2025-01-23T12:00:00Z", "2025-01-23T14:00:00Z", "2025-01-23T16:00:00Z",
    "2025-01-23T18:00:00Z", "2025-01-23T20:00:00Z", "2025-01-23T22:00:00Z",
    "2025-01-24T00:00:00Z", "2025-01-24T02:00:00Z", "2025-01-24T04:00:00Z",
    "2025-01-24T06:00:00Z", "2025-01-24T08:00:00Z", "2025-01-24T10:00:00Z",
    "2025-01-24T12:00:00Z", "2025-01-24T14:00:00Z"
];
function seedData() {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoURL = process.env.MONGO_URL || "";
        yield mongoose_1.default.connect(mongoURL);
        console.log("Connected to MongoDB:", mongoURL);
        yield Timezone_1.Timezone.deleteMany({});
        yield Timeslot_1.Timeslot.deleteMany({});
        yield Timezone_1.Timezone.insertMany(TIMEZONES);
        yield Timeslot_1.Timeslot.insertMany(TIMESLOTS.map(utc => ({ utc })));
        console.log("Seed successfull | Timezone and Timeslot");
        process.exit(0);
    });
}
seedData().catch(err => {
    console.log(err);
    process.exit(1);
});
