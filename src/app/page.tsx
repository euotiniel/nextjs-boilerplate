import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          nextjs-boilerplate
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Do you want a next project? Start here.{" "}
        </p>
        <div>
          <a
            href="https://github.com/euotiniel/nextjs-boilerplate"
            className="font-medium text-sm px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-black/50 rounded-full duration-300"
            target="_blank"
          >
            Visit on GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </main>
    </Layout>
  );
}
