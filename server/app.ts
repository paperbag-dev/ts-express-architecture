import express from "express";
import loaders, { Loader } from "./loaders";

class App {
	private app: express.Application;
	private loaders: Loader;
	constructor(loaders: Loader) {
		this.app = express();
		this.loaders = loaders;
	}

	listen = async () => {
		await this.loaders.init(this.app);
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server is listening on port ${this.app.get("port")}`);
		});
	};
}

new App(loaders).listen();
