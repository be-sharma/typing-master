import { Link } from "react-router-dom";
import { useTypingTest } from "../hooks/useTypingTest";

const TEST_TEXT =
  "The quick brown fox jumps over the lazy dog. Good typing skills help you work faster and stay focused.";

function Practice() {
  const {
    typedText,
    timeLeft,
    isStarted,
    isFinished,
    inputRef,
    correctCharacters,
    incorrectCharacters,
    accuracy,
    wpm,
    progress,
    handleChange,
    restartTest,
  } = useTypingTest(TEST_TEXT);

  return (
    <main className="min-h-screen bg-[#0b0b0b] pt-16 text-white">

      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link
            to="/"
            className="text-lg font-bold tracking-tight"
          >
            Typing<span className="text-zinc-500">Master</span>
          </Link>

          <div className="text-sm text-zinc-500">
            Practice Mode
          </div>

        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">

        {/* Top information */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-600">
              Typing Test
            </p>

            <h1 className="text-3xl font-semibold sm:text-4xl">
              Test your speed
            </h1>
          </div>

          <div className="flex gap-3">

            {/* Time */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <p className="text-xl font-semibold">
                {timeLeft}s
              </p>

              <p className="text-xs text-zinc-500">
                TIME
              </p>
            </div>

            {/* WPM */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <p className="text-xl font-semibold">
                {wpm}
              </p>

              <p className="text-xs text-zinc-500">
                WPM
              </p>
            </div>

            {/* Accuracy */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <p className="text-xl font-semibold">
                {accuracy}%
              </p>

              <p className="text-xs text-zinc-500">
                ACCURACY
              </p>
            </div>

          </div>
        </div>

        {/* Typing Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="relative min-h-[360px] cursor-text overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30 sm:p-10"
        >

          {/* Progress bar */}
          <div className="absolute left-0 top-0 h-1 w-full bg-white/5">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Typing text */}
          <div className="mt-5 text-xl leading-[2] tracking-wide sm:text-2xl">

            {TEST_TEXT.split("").map((char, index) => {

              let className = "text-zinc-600";

              if (index < typedText.length) {
                className =
                  typedText[index] === char
                    ? "text-white"
                    : "bg-red-500/20 text-red-400";
              }

              if (index === typedText.length && !isFinished) {
                className =
                  "rounded-sm border-b-2 border-white text-white";
              }

              return (
                <span
                  key={`${char}-${index}`}
                  className={className}
                >
                  {char}
                </span>
              );
            })}

          </div>

          {/* Hidden typing input */}
          <textarea
            ref={inputRef}
            value={typedText}
            onChange={handleChange}
            disabled={isFinished}
            autoFocus
            spellCheck="false"
            className="absolute inset-0 h-full w-full resize-none bg-transparent p-6 text-transparent caret-transparent outline-none sm:p-10"
            aria-label="Typing input"
          />

        </div>

        {/* Bottom stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* Correct */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xl font-semibold">
              {correctCharacters}
            </p>

            <p className="text-xs text-zinc-500">
              CORRECT
            </p>
          </div>

          {/* Errors */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xl font-semibold text-red-400">
              {incorrectCharacters}
            </p>

            <p className="text-xs text-zinc-500">
              ERRORS
            </p>
          </div>

          {/* Characters */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xl font-semibold">
              {typedText.length}
            </p>

            <p className="text-xs text-zinc-500">
              CHARACTERS
            </p>
          </div>

          {/* Progress */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xl font-semibold">
              {progress}%
            </p>

            <p className="text-xs text-zinc-500">
              PROGRESS
            </p>
          </div>

        </div>

        {/* Finished Result */}
        {isFinished && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Test Complete
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {wpm} WPM
            </h2>

            <p className="mt-2 text-zinc-500">
              {accuracy}% accuracy · {incorrectCharacters} errors
            </p>

            <button
              onClick={restartTest}
              className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Try Again
            </button>

          </div>
        )}

        {/* Initial hint */}
        {!isStarted && !isFinished && (
          <p className="mt-6 text-center text-sm text-zinc-600">
            Click the typing area and start typing to begin the timer.
          </p>
        )}

      </section>
    </main>
  );
}

export default Practice;