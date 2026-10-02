import Navbar from "../components/Navbar";
import { useTypingTest } from "../hooks/useTypingTest";

const TEXT =
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
  } = useTypingTest(TEXT);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Typing Test
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Test your speed</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Type as fast and accurately as you can.
            </p>
          </div>

          <div className="flex gap-2">
            {[
              ["TIME", `${timeLeft}s`],
              ["WPM", wpm],
              ["ACCURACY", `${accuracy}%`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center"
              >
                <p className="font-semibold">{value}</p>
                <p className="text-[10px] text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={() => inputRef.current?.focus()}
          className="relative min-h-[300px] cursor-text rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
        >
          <div className="absolute left-0 top-0 h-1 w-full bg-white/5">
            <div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xl leading-[2] text-zinc-600 sm:text-2xl">
            {TEXT.split("").map((char, i) => (
              <span
                key={i}
                className={
                  i < typedText.length
                    ? typedText[i] === char
                      ? "text-white"
                      : "bg-red-500/20 text-red-400"
                    : i === typedText.length
                    ? "border-b-2 border-white text-white"
                    : ""
                }
              >
                {char}
              </span>
            ))}
          </p>

          <textarea
            ref={inputRef}
            value={typedText}
            onChange={handleChange}
            disabled={isFinished}
            autoFocus
            spellCheck="false"
            className="absolute inset-0 h-full w-full resize-none bg-transparent text-transparent outline-none caret-transparent"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["CORRECT", correctCharacters],
            ["ERRORS", incorrectCharacters],
            ["CHARACTERS", typedText.length],
            ["PROGRESS", `${progress}%`],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-xl font-semibold">{value}</p>
              <p className="text-xs text-zinc-600">{label}</p>
            </div>
          ))}
        </div>

        {isFinished && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-xs text-zinc-500">TEST COMPLETE</p>
            <h2 className="mt-2 text-4xl font-bold">{wpm} WPM</h2>
            <p className="mt-2 text-zinc-500">
              {accuracy}% accuracy · {incorrectCharacters} errors
            </p>

            <button
              onClick={restartTest}
              className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-black"
            >
              Try Again
            </button>
          </div>
        )}

        {!isStarted && !isFinished && (
          <p className="mt-5 text-center text-sm text-zinc-600">
            Click the typing area and start typing.
          </p>
        )}
      </section>
    </main>
  );
}

export default Practice;