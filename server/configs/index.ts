import dotenv from "dotenv";
import { EnvironmentError } from "../errors";
import CONSTANTS from "./constants";
import { Type } from "../types/dbType";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const env = dotenv.config();

if (!env) {
	throw new EnvironmentError(".env 파일을 찾을 수 없습니다.");
}

export default {
	DB: {
		HOST: process.env.DB_HOST || "localhost",
		TYPE: process.env.DB_TYPE as Type,
		PORT: Number(process.env.DB_PORT) || 5432,
		USERNAME: process.env.DB_USERNAME || "",
		PASSWORD: process.env.DB_PASSWORD || "",
		DATABASE: process.env.DB_NAME || ""
	},
	SECRET: process.env.SECRET,
	PORT: process.env.PORT || 4000,
	JWT_SECRET: process.env.JWT_SECRET,
	LOGS_STAGE: process.env.LOG_STAGE || "dev",
	CONSTANTS
};
