import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export const useSpeechHandler = () => {
  const [reading, setReading] = useState(false);
  const { speak, cancel } = useSpeechSynthesis({
    onEnd: () => setReading(false),
  });

  const handleSpeak = (text) => {
    if (!text) return;

    if (!reading) {
      speak({ text });
      setReading(true);
    } else {
      cancel();
      setReading(false);
    }
  };

  return { reading, handleSpeak };
};
