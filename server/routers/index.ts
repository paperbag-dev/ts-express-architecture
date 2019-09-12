import * as express from "express";
import { sayHello } from "../services/index";

const router = express.Router();
router.get("", (req: express.Request, res: express.Response) => {
	const greeting = sayHello();
	res.json(greeting);
});

export default router;
