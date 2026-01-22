import { Button } from "@/components/ui/button"

function App() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Test UI</h1>
      <Button variant="destructive">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button size="sm">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="icon">Click me</Button>
      <Button size="icon-sm">Click me</Button>
      <Button size="icon-lg">Click me</Button>
    </main>
  )
}

export default App
