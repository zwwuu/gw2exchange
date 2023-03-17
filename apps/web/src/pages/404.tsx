import Link from "next/link";
import { IconHome } from "@tabler/icons-react";

export default function Custom404Page() {
  return (
    <main className={"flex flex-col items-center space-y-6"}>
      <div>
        <h1 className={"text-3xl font-bold"}>404</h1>
        <h2 className={"text-xl"}>Page not found</h2>
      </div>
      <Link className={"btn"} href={"/"}>
        <IconHome className={"mr-2"} /> Go back to home
      </Link>
    </main>
  );
}
