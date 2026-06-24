import type { Route } from "./+types/home";
import prisma from "~/lib/prisma";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader = async () => {
  // does this get all users?
  const users = await prisma.user.findMany();
  return { users };
};

export default function Home({ loaderData }: Route.ComponentProps) {
  const { users } = loaderData;
  return (
    <div className={`min-h-screen flex flex-col items-center`}>
      <h1 className={`flex justify-center text-4xl p-8`}>Superblog</h1>
      <ul className={`list-inside`}>
        {
          users.map(user => {
            return (
              <li key={user.id} className="font-semibold">
                {" "}
                {user.name}: {user.email}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
