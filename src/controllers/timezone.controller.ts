import { Request, Response } from "express";
import * as tzService from "../services/timezone.services";

/**
 * GET /api/timezones
 */
export const fetchTimezones = async (_req: Request, res: Response) => {
    try {
        const timezones = await tzService.getAllTimezones();
        res.json({
            status: true,
            statusCode: 200,
            timezones
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch timezones" });
    }
};
