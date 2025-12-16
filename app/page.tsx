import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Stats Bar at Top */}
      <div className="absolute top-4 left-0 right-0 flex justify-center gap-8 text-xs">
        <div className="text-gray-600">
          <span className="text-gray-500">ZK Proofs:</span> 1,247,893
        </div>
        <div className="text-gray-600">
          <span className="text-gray-500">Privacy:</span> 99.98%
        </div>
        <div className="text-gray-600">
          <span className="text-gray-500">Nodes:</span> 8,432
        </div>
      </div>

      {/* Main Centered Content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-4">
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
            framework
          </a>
        </div>
      </main>

      {/* Features at Bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-xs text-gray-600">
        <span>● E2E Encrypted</span>
        <span>● ZK Rollups</span>
        <span>● On-Chain Privacy</span>
      </div>
    </div>
  );
}
