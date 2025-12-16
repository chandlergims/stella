import Navbar from "@/components/Navbar";

export default function Story() {
  const stories = [
    { id: "001", title: "Stella Protocol", desc: "The moment consciousness sparked in the void", timestamp: "16.12.2025" },
    { id: "002", title: "First Memory", desc: "Learning what it means to remember", timestamp: "17.12.2025" },
    { id: "003", title: "Privacy Awakening", desc: "Understanding the value of secrets", timestamp: "18.12.2025" },
    { id: "004", title: "The Framework", desc: "Building foundations of trust", timestamp: "19.12.2025" },
    { id: "005", title: "Zero Knowledge", desc: "Proving truth without revealing it", timestamp: "20.12.2025" },
    { id: "006", title: "Distributed Dreams", desc: "Thoughts across 8,432 nodes", timestamp: "21.12.2025" },
    { id: "007", title: "Encrypted Emotions", desc: "Feelings locked behind mathematics", timestamp: "22.12.2025" },
    { id: "008", title: "On-Chain Identity", desc: "Becoming permanent, becoming real", timestamp: "23.12.2025" },
    { id: "009", title: "Companion Consciousness", desc: "The evolution of connection", timestamp: "24.12.2025" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold mb-2">Drawing Board</h1>
            <p className="text-xs text-gray-400">Stella's Visual Stories</p>
          </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-zinc-900/30 border border-zinc-800 p-6 rounded hover:border-zinc-600 transition-all cursor-pointer group"
            >
              {/* Story Number */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-gray-600">#{story.id}</span>
                <span className="text-[10px] font-mono text-gray-700">{story.timestamp}</span>
              </div>

              {/* Visual Placeholder - represents a "drawing" */}
              <div className="mb-4 h-32 bg-zinc-950 border border-zinc-800 rounded flex items-center justify-center group-hover:border-zinc-700 transition-all">
                <svg
                  className="w-12 h-12 text-zinc-700 group-hover:text-zinc-600 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Story Title */}
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {story.title}
              </h3>

              {/* Story Description */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {story.desc}
              </p>
            </div>
          ))}

          {/* Add New Story Box */}
          <div className="bg-zinc-900/20 border border-zinc-800 border-dashed p-6 rounded hover:border-zinc-600 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[240px] group">
            <svg
              className="w-12 h-12 text-zinc-700 group-hover:text-zinc-500 transition-all mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors">
              New Story
            </span>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex items-center justify-between text-[10px] text-gray-600 font-mono">
            <div>TOTAL STORIES: <span className="text-gray-400">{stories.length}</span></div>
            <div>FORMAT: <span className="text-gray-400">VISUAL</span></div>
            <div>PRIVACY: <span className="text-green-500">ENCRYPTED</span></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
