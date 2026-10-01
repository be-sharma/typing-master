import { useEffect, useRef, useState } from "react";

const TEST_DURATION = 60;

export function useTypingTest(testText) {
  const [typedText, setTypedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const inputRef = useRef(null);

  // Timer
  useEffect(() => {
    if (!isStarted || isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isFinished]);

  // Handle typing
  const handleChange = (event) => {
    const value = event.target.value;

    if (isFinished) return;

    if (!isStarted && value.length > 0) {
      setIsStarted(true);
    }

    setTypedText(value);

    if (value.length >= testText.length) {
      setIsFinished(true);
    }
  };

  // Restart
  const restartTest = () => {
    setTypedText("");
    setTimeLeft(TEST_DURATION);
    setIsStarted(false);
    setIsFinished(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  // Statistics
  const elapsedTime = TEST_DURATION - timeLeft;

  const correctCharacters = typedText
    .split("")
    .filter((char, index) => char === testText[index]).length;

  const incorrectCharacters =
    typedText.length - correctCharacters;

  const accuracy =
    typedText.length > 0
      ? Math.round(
          (correctCharacters / typedText.length) * 100
        )
      : 100;

  const minutes = Math.max(elapsedTime, 1) / 60;

  const wpm =
    typedText.length > 0
      ? Math.round(correctCharacters / 5 / minutes)
      : 0;

  const progress =
    testText.length > 0
      ? Math.min(
          Math.round((typedText.length / testText.length) * 100),
          100
        )
      : 0;

  return {
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
  };
}