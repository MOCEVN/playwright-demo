import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <nav>
        <Link href="/about">About</Link>
        <br />
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
