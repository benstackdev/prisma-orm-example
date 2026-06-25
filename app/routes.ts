import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/posts", "routes/posts/home.tsx"),
    route("/posts/:postId", "routes/posts/post.tsx"),
    route("/posts/new", "routes/posts/new.tsx")
  ])
] satisfies RouteConfig;