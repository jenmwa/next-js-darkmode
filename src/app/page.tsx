import dynamic from "next/dynamic";
import ThemeSwitch from "./_components/ThemeSwitch";

const DynamicThemeToggle = dynamic(() => import("./_components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-48">
        <main className="dark:bg-black dark:text-white">
          <div className="border-2 py-8 px-16 ">
            <h1>Next.js dark mode toggle</h1>
            <h4>This is using localstorage.</h4>
            <DynamicThemeToggle />
          </div>
          {/* <div className="border-2 py-8 px-16">
            <h1>Next.js dark mode toggle v2</h1>
            <h4>This is using next-themes.</h4>
            <ThemeSwitch></ThemeSwitch>
          </div> */}
        </main>
      </div>
    </>
  );
}
