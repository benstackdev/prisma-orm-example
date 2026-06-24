import prisma from "~/lib/prisma";
import type { Route } from "./+types/post";
import { data } from "react-router";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { postId } = params;
  // fetching the requested post (in the url) by its id
  const post = await prisma.post.findUnique({
    where: { id: parseInt(postId) },
    include: {
      author: true
    }
  });
  if (!post) throw data("Post Not Found", { status: 404 });

  return { post };
};

const Post = ({ loaderData }: Route.ComponentProps) => {
  const { post } = loaderData;
  return (
    <div className={`flex flex-col items-center mt-16`}>
      <article>
        <h1 className={`text-3xl font-semibold`}>{post.title}</h1>
        <p>{post.author.name}</p>
        <div className="">
          {" "}
          {post.content || "No content available"}
        </div>
      </article>
    </div>
  );
};

export default Post;