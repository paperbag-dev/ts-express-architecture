import dotenv from "dotenv";
import { EnvironmentError } from "../errors";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = dotenv.config();

if (!env) {
	throw new EnvironmentError(".env 파일을 찾을 수 없습니다.");
}

export default {
	port: process.env.PORT,
	dbUri: process.env.DB_URI,
	jwtSecret: process.env.JWT_SECRET,
	logs: {
		stage: process.env.LOG_STAGE || "dev"
	}
};
