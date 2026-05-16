

import { Router } from "express";

import { sendEmail } from "../controller/email.controller.js";

const router = Router(); 

router.post('/sendEmail',sendEmail); 

export default router; 