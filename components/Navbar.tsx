import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col items-center gap-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/905c41b6-c299-4757-8b05-c6dfd651bd34.png"
              alt="Stella"
              width={40}
              height={40}
              priority
            />
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/story"
              className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
            >
              story
            </Link>
            <Link
              href="/logs"
              className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
            >
              logs
            </Link>
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
            >
              hugging face
            </a>
            <Link
              href="/sdk"
              className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
            >
              framework
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
