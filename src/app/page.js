import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <LearnLink/>
      <LearnUseRouter/>
      <LearnCSSModule/>
      <LearnUseImage/>
      <LearnDataFetching/>
    </main>
  );
}
