import { Timezone, ITimezones } from "../models/Timezone";

export const getAllTimezones = async (): Promise<ITimezones[]> => {
    return Timezone.find().sort({ id: 1 }).exec();
};
