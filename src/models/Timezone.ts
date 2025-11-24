import { Document, model, Schema } from "mongoose";

export interface ITimezones extends Document {
    id: string; // short id (ex : IST)
    name: string; // name of Timezone (ex : India Standart Time)
    offset: number // offset in hours relative to UTC
}

// defining Collection Schemas
const timezoneSchema = new Schema<ITimezones>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    offset: { type: Number, required: true }
})

export const Timezone = model<ITimezones>("Timezone", timezoneSchema)