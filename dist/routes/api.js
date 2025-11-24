"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timezone_controller_1 = require("../controllers/timezone.controller");
const timeslot_controller_1 = require("../controllers/timeslot.controller");
const router = (0, express_1.Router)();
router.get("/timezones", timezone_controller_1.fetchTimezones);
router.get("/timeslots", timeslot_controller_1.fetchTimeslots);
exports.default = router;
