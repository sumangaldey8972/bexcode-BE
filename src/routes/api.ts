import { Router } from "express";
import { fetchTimezones } from "../controllers/timezone.controller";
import { fetchTimeslots } from "../controllers/timeslot.controller";

const router = Router();

router.get("/timezones", fetchTimezones);
router.get("/timeslots", fetchTimeslots);

export default router;
