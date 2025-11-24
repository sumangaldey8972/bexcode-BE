import { Document, model, Schema } from "mongoose";



export interface ITimeslot extends Document {
    utc: string // ISO string in UTC
}

const timeslotSchema = new Schema<ITimeslot>({
    utc: { type: String, required: true }
})

export const Timeslot = model<ITimeslot>("Timeslot", timeslotSchema)