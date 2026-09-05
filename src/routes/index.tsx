import { createFileRoute } from "@tanstack/react-router";
import { Reader } from "@/components/reader/Reader";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Reader />;
}
