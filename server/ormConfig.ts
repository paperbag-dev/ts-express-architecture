import config from "./configs";
import { ConnectionOptions } from "typeorm";
import { IDbConfig } from "./interfaces/dbConfigInterfaces";

const { DB }: IDbConfig = config;

const ormConfig: ConnectionOptions = {
	type: DB.TYPE,
	host: DB.HOST,
	port: DB.PORT,
	username: DB.USERNAME,
	//password: DB.PASSWORD,
	database: DB.DATABASE,
	synchronize: true,
	logging: true,
	entities: [__dirname + "/models/entities/*.entity.ts"],
	migrations: ["./models/migration/**/*.ts"],
	subscribers: ["./subscriber/**/*.ts"]
};

export default ormConfig;
