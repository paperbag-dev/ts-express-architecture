import express from "express";
import schemaLoader from "./schemaLoader";
import expressLoader from "./expressLoader";

export class Loader {
	init = async (app: express.Application): Promise<void> => {
		await schemaLoader();
		console.log("DATABASE INITIALIZED");
		await expressLoader(app);
		console.log("EXPRESS APP INITIALIZED");
	};
}
const loader = new Loader();
export default loader;
