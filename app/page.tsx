import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center mx-auto">
      <h1>Next.JS Parallel + Intercept Route BUG!!!!</h1>
      <Button className="w-28" asChild>
        <Link href="/sign-in">Sign-in</Link>
      </Button>
    </div>
  );
}
