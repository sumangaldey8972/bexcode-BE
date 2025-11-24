import { Request, Response } from "express";
import * as tsService from "../services/timeslot.services";

/**
 * GET /api/timeslots
 */
export const fetchTimeslots = async (_req: Request, res: Response) => {
    try {
        const timeslots = await tsService.getAllTimeslots();
        // return array of strings for simplicity
        let convertedTimeslots = timeslots.map(ts => ts.utc)
        res.json({
            status: true,
            statusCode: 200,
            convertedTimeslots
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch timeslots" });
    }
};
