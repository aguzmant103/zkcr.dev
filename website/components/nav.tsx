import Link from "next/link";

export default function Nav() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <span className="sr-only">Zero Knowledge Community</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </Link>
        {/*         <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/learn"
        >
          Learn
        </Link> */}
        {/*         <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/blog"
        >
          Blog
        </Link> */}
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://t.me/+kzFeEsJhuB8wYWYx"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
