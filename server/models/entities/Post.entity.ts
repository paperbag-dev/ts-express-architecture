import {
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	Entity,
	CreateDateColumn
} from "typeorm";

@Entity()
class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 50 })
	title: string;

	@Column({ type: "text" })
	content: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}

export default Post;
