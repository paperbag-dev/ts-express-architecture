import { createConnection } from "typeorm";
import ormConfig from "../ormConfig";

export default async () => await createConnection(ormConfig);
