"use client";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="bg-red-700 p-8">
      <h1>Web</h1>
      <Button appName="Web">Click me</Button>
    </div>
  );
}
