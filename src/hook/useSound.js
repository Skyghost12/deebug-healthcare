import { useCallback, useRef } from "react";

export function useSound() {
  const audioContextRef = useRef(null);

  const getAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (
        window.AudioContext || window.webkitAudioContext
      )();
    }

    return audioContextRef.current;
  };

  const playSound = useCallback((type = "click") => {
    const ctx = getAudioContext();

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;

    switch (type) {
      case "click":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(500, now);
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.06);

        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        oscillator.start(now);
        oscillator.stop(now + 0.08);
        break;

      case "success":
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(500, now);
        oscillator.frequency.exponentialRampToValueAtTime(1000, now + 0.15);

        gainNode.gain.setValueAtTime(0.12, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        oscillator.start(now);
        oscillator.stop(now + 0.2);
        break;

      case "error":
        oscillator.type = "sawtooth";
        oscillator.frequency.setValueAtTime(180, now);
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.15);

        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        oscillator.start(now);
        oscillator.stop(now + 0.18);
        break;

      case "faaah":
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(700, now);
        oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.35);

        gainNode.gain.setValueAtTime(0.12, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        oscillator.start(now);
        oscillator.stop(now + 0.4);
        break;

      default:
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(500, now);

        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        oscillator.start(now);
        oscillator.stop(now + 0.1);
    }
  }, []);

  return { playSound };
}