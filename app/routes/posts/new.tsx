import type { Route } from "./+types/new";
import { Form, redirect } from "react-router";
import prisma from "~/lib/prisma";

const formRowStyle = `flex flex-col`;
const formLabelStyle = `text-xl font-semibold mb-1`;

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  // getting form data submitted with the request
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  try {
    await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1
      }
    });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create post" }, { status: 500 });
  }
  // Kinda like a final res.redirect() in Express
  return redirect("/posts");
};

const NewPost = () => {
  return (
    <div className="flex flex-col justify-center gap-8">
      <h1 className={`font-semibold text-3xl mx-auto`}>Create New Post</h1>
      <Form method="post" className={`flex flex-col mx-auto gap-8`}>
        <div className={formRowStyle}>
          <label htmlFor="title" className={formLabelStyle}>Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Your Post Title Here"
            className="p-0.5"
          />
        </div>
        <div className={formRowStyle}>
          <label htmlFor="content" className={formLabelStyle}>Post Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="Write your post here..."
            rows={7}
            className="p-0.5" />
        </div>
        <button className={`p-1 bg-gray-600 hover:bg-gray-800 rounded-lg`} type="submit">Create Post</button>
      </Form>
    </div>
  );
};

export default NewPost;