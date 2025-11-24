import { Timeslot, ITimeslot } from "../models/Timeslot";

export const getAllTimeslots = async (): Promise<ITimeslot[]> => {
    return Timeslot.find().sort({ utc: 1 }).exec();
};
