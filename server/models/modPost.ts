import Post from "./entities/Post.entity";
import { ICreatePost, IDeletePost } from "../interfaces/postInterfaces";
import { getRepository, EntitySchema, BaseEntity } from "typeorm";

class modPost {
	private postRepository;

	constructor(schema) {}

	getPostList = async () => {
		const ret: Array<Post> = await Post.find();
		return ret;
	};

	createPost = async (data: ICreatePost) => {
		const ret: Post = await Post.create({ ...data });
		return ret;
	};

	deletePost = async (data: IDeletePost) => {
		await Post.delete({ ...data });
	};
}

const modPostInstance = new modPost(Post);
