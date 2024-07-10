import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center flex-col">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        404
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5">
        The requested page was not found
      </p>
      <small className="text-[16px] text-muted-foreground flex flex-row items-center gap-1">
        <FaArrowLeft size={15} />{" "}
        <Link href="/" className="border-b">
          back to home
        </Link>
      </small>
    </main>
  );
}
