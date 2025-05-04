import React, { useState } from "react";
import { useSpeechHandler } from "../../hooks/useSpeechHandler";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import usePageActions from "../../hooks/usePageActions";

const Home = () => {
  const [search, setSearch] = useState("");
  const { reading, handleSpeak } = useSpeechHandler();

  usePageActions();

  return (
    <main className="flex-grow flex items-center justify-center space-x-0">
      <div className="text-center">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSpeak(search);
          }}
        />

        <Button reading={reading} onClick={() => handleSpeak(search)} />

        <button
          className="bg-transparent font-bold py-2 px-4 hover:outline-none focus:outline-none clear"
          onClick={() => setSearch("")}
        >
          Temizle
        </button>
      </div>
    </main>
  );
};

export default Home;