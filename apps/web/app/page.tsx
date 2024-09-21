"use client";
import { Button, ButtonShadCN, InputBox } from "@repo/ui";

export default function Home() {
  return (
    <div className="bg-red-700 p-8">
      <h1>Web</h1>
      <Button
        appName="Web"
        className="bg-yellow-200 text-white px-4 py-2 rounded"
      >
        Click me
      </Button>
      <div className="bg-white">
        <InputBox placeholder="Type here" onChange={() => {}} />
        <ButtonShadCN
          variant="default"
          size="default"
          className="bg-slate-600 hover:bg-green-200 text-white px-4 py-2 rounded"
        >
          Click me
        </ButtonShadCN>
      </div>
    </div>
  );
}
