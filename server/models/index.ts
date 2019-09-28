import { EntitySchema } from "typeorm";

class BaseModel {
	protected entityRepository: EntitySchema;

	constructor(schema: EntitySchema) {
		if (!!this.entityRepository) return this;
	}
}

class PostModel extends BaseModel {
	constructor(shema: EntitySchema) {
		super(shema);
		console.log(this.entityRepository);
	}
}
