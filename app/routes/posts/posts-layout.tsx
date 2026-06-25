import { NavLink, Outlet } from "react-router";

const PostsLayout = () => {
  return (
    <div className="">
      <nav className="flex justify-center gap-8 mb-8">
        <NavLink to={`posts`}>All Posts</NavLink>
        <NavLink to={`posts/new`}>Create New Post</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostsLayout;