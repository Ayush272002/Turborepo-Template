"use client";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="bg-yellow-700 p-8">
      <h1>Web</h1>
      <Button
        appName="Docs"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me
      </Button>
    </div>
  );
}
