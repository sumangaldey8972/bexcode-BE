import mongoose from "mongoose";
import dotenv from "dotenv"
import { Timezone } from "../models/Timezone";
import { Timeslot } from "../models/Timeslot";


dotenv.config()

const TIMEZONES = [
    { id: "PT", name: "Pacific Time", offset: -8 },
    { id: "MT", name: "Mountain Time", offset: -7 },
    { id: "CT", name: "Central Time", offset: -6 },
    { id: "ET", name: "Eastern Time", offset: -5 },
    { id: "AKT", name: "Alaska Time", offset: -9 },
    { id: "HAT", name: "Hawaii-Aleutian Time", offset: -10 },
    { id: "IST", name: "India Standard Time", offset: 5.5 },
    { id: "CST", name: "China Standard Time", offset: 8 }
]

const TIMESLOTS = [
    "2025-01-23T00:00:00Z", "2025-01-23T02:00:00Z", "2025-01-23T04:00:00Z",
    "2025-01-23T06:00:00Z", "2025-01-23T08:00:00Z", "2025-01-23T10:00:00Z",
    "2025-01-23T12:00:00Z", "2025-01-23T14:00:00Z", "2025-01-23T16:00:00Z",
    "2025-01-23T18:00:00Z", "2025-01-23T20:00:00Z", "2025-01-23T22:00:00Z",
    "2025-01-24T00:00:00Z", "2025-01-24T02:00:00Z", "2025-01-24T04:00:00Z",
    "2025-01-24T06:00:00Z", "2025-01-24T08:00:00Z", "2025-01-24T10:00:00Z",
    "2025-01-24T12:00:00Z", "2025-01-24T14:00:00Z"
];


async function seedData() {
    const mongoURL = process.env.MONGO_URL || ""
    await mongoose.connect(mongoURL)


    console.log("Connected to MongoDB:", mongoURL)

    await Timezone.deleteMany({});
    await Timeslot.deleteMany({});

    await Timezone.insertMany(TIMEZONES);
    await Timeslot.insertMany(TIMESLOTS.map(utc => ({ utc })));

    console.log("Seed successfull | Timezone and Timeslot")
    process.exit(0)
}

seedData().catch(err => {
    console.log(err)
    process.exit(1)
})