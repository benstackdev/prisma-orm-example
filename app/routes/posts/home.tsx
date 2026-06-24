import { Link } from "react-router";
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
      <h1 className={`text-3xl font-semibold mb-8`}>All posts</h1>
      <ul className={`flex flex-col items-begin`}>
        {
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`${post.id}`}
                  className={`text-blue-300 underline decoration-solid underline-offset-2`}>
                  {post.title}
                </Link>
                <p>Posted by: {post.author.name}</p>
                <br />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Posts;