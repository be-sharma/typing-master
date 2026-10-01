function TypingPreview() {
  return (
    <div className="mt-16 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left shadow-2xl shadow-black/40 backdrop-blur-xl">

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
        </div>

        <div className="text-xs font-medium tracking-[0.2em] text-zinc-500">
          TYPING TEST
        </div>

        <div className="text-sm text-zinc-400">
          60 SEC
        </div>
      </div>

      {/* Typing Area */}
      <div className="px-6 py-10 sm:px-10">
        <p className="text-xl leading-relaxed text-zinc-600 sm:text-2xl">
          <span className="text-white">
            The quick brown fox jumps over the lazy dog.
          </span>{" "}
          Good typing skills help you work faster and stay focused.
        </p>

        {/* Fake Cursor */}
        <div className="mt-4 h-8 w-0.5 animate-pulse bg-white"></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-t border-white/10">
        <div className="px-5 py-5 text-center">
          <p className="text-2xl font-semibold text-white">68</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            WPM
          </p>
        </div>

        <div className="border-x border-white/10 px-5 py-5 text-center">
          <p className="text-2xl font-semibold text-white">96%</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            Accuracy
          </p>
        </div>

        <div className="px-5 py-5 text-center">
          <p className="text-2xl font-semibold text-white">42s</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
            Time
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypingPreview;