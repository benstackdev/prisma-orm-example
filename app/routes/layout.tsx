import { NavLink, Outlet } from "react-router";

const navStyle = ({ isActive }: { isActive: boolean; }) => isActive ? "text-blue-600" : "text-white";

const PostsLayout = () => {
  return (
    <div className="">
      <nav className="flex justify-center gap-8 mb-8">
        <NavLink className={navStyle} to={``}>Home</NavLink>
        <NavLink className={navStyle} to={`posts`} end={true}>All Posts</NavLink>
        <NavLink className={navStyle} to={`posts/new`} end={true}>Create New Post</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostsLayout;