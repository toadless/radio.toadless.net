import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex justify-center flex-col h-screen items-center">
          <h1 className="font-space-grotesk pb-6 text-4xl">Under Construction</h1>
          <img src="/fire.gif" className="w-1/3" />
        </div>
      </main>
    </>
  )
}