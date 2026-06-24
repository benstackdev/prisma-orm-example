import type { Route } from "../posts/+types/home";
import prisma from "~/lib/prisma";

export const loader = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  });
  return { posts };
};

const Posts = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  return (
    <div className="flex flex-col items-center">
      <h1 className={`text-3xl font-semibold`}>All posts</h1>
      <ul className={`flex flex-col items-center`}>
        {
          posts.map((post) => {
            return (
              <li key={post.id}>
                {" "}
                <span>{post.title}</span>
                {" "}
                <span>Posted by: {post.author.name}</span>
                {" "}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Posts;