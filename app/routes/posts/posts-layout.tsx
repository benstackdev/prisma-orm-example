import { Outlet } from "react-router";

const PostsLayout = () => {
  return (
    <div className="">
      <nav>
        Nav content goes here
      </nav>
      <Outlet />
    </div>
  );
};

export default PostsLayout;