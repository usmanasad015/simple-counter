import Counter from "./components/Counter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">RTK Counter</h1>
      <Counter />
    </main>
  )
}

