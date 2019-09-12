import express from "express";
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import router from "../routers";

import config from "../configs";

export default async (app: express.Application): Promise<void> => {
	app.use(helmet());
	app.use(logger(config.LOGS_STAGE));
	app.use(cookieParser(config.SECRET));
	app.use(
		session({
			secret: config.SECRET as string,
			resave: false,
			cookie: { secure: false, httpOnly: false }
		})
	);
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static("../"));
	app.set("port", config.PORT);

	app.use("/api", router);
	app.use((req, res, next) => {
		res.status(404).json("Can't find anything");
	});
	app.use(
		(
			err: Error,
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) => {
			console.error(err.stack);
			res.status(500).json("Something is broken");
		}
	);
};
