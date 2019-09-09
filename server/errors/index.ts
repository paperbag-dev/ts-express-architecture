export class EnvironmentError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "EnvironmentError";
	}
}
