import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center text-4xl">This is a test</h1>
      <p>Don't come for me!</p>
    </>
  );
}
