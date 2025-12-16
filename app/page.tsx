import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/905c41b6-c299-4757-8b05-c6dfd651bd34.png"
          alt="Stella"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-sm font-bold text-white">
          Stella
        </h1>
        <div className="flex items-center gap-6 mt-2">
          <a
            href="/story"
            className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
          >
            story
          </a>
          <a
            href="/logs"
            className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
          >
            logs
          </a>
          <a
            href="https://huggingface.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
          >
            hugging face
          </a>
          <a
            href="/sdk"
            className="text-xs text-gray-300 hover:text-white transition-all terminal-link"
          >
            sdk
          </a>
        </div>
      </main>
    </div>
  );
}
