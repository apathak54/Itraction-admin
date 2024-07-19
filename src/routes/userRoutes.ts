import { Router } from "express";
const router = Router();
const userController = require('../controller/userController')
router.use('/',userController);
export = router ;