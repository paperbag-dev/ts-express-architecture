import { Type } from "../types/dbType";

export interface IDbConfig {
	DB: {
		TYPE: Type;
		HOST: string;
		USERNAME: string;
		PASSWORD: string;
		DATABASE: string;
		PORT: number;
	};
}
