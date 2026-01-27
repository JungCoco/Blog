import { Button } from "@/components/ui/button"

function App() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Test UI</h1>
      <Button className="rounded-lg bg-red-0">Click me</Button>
      <Button className="p-lg">Click me</Button>
      <Button className="p-0 p-sm">Click me</Button>
      <div className="flex flex-col gap-sm">
          <Button className="pl-sm font-bold text-md">Click me</Button>
          <Button className="text-xl">Click me</Button>
      </div>
      <Button className="rounded-md font-bold">Click me</Button>
      <Button className="text-blue-1 bg-blue-0">Click me</Button>
      <Button>Click me</Button>
    </main>
  )
}

export default App
