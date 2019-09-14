import { modPost } from "../server/models/modPost";
import Post from "../server/models/entities/Post.entity";
import { ICreatePost } from "../server/interfaces/postInterfaces";
import { expect } from "chai";

describe("modPost test", () => {
	it("Get all post list", async () => {
		const result = await modPost.getPostList();
		const posts = await Post.find();
		expect(result.length).eql(posts.length);
	});

	it("Create post", async () => {
		const data: ICreatePost = {
			title: "Test from Mocha",
			content: "This is Content from Mocha"
		};
		const beforeList = await modPost.getPostList();
		await modPost.createPost(data);
		const afterList = await modPost.getPostList();

		expect(beforeList.length).eql(afterList.length - 1);
	});
});
