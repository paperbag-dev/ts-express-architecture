import Post from "./entities/Post.entity";
import { ICreatePost, IDeletePost } from "../interfaces/postInterfaces";

export const modPost = {
	getPostList: async () => {
		const ret: Array<Post> = await Post.find();
		return ret;
	},

	createPost: async (data: ICreatePost) => {
		const ret: Post = await Post.create({ ...data });
		return ret;
	},

	deletePost: async (data: IDeletePost) => {
		await Post.delete({ ...data });
	}
};
