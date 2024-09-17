import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-1 flex-col">
        <h1>Main Body Content</h1>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
