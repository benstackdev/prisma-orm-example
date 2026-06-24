import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("posts", [
    layout("routes/posts/posts-layout.tsx", [
      index("routes/posts/home.tsx"),
      route("/:postId", "routes/posts/post.tsx")
    ])
  ])
] satisfies RouteConfig;