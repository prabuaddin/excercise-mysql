"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PassangerController_1 = require("../controllers/PassangerController");
const router = (0, express_1.Router)();
router.get('/', PassangerController_1.findPassangers);
router.get('/survived', PassangerController_1.findPassangersSurvived);
router.get('/survived/sex', PassangerController_1.findTotalPassangers);
exports.default = router;
