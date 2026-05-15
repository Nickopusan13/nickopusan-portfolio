"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import { useChatBotMessage } from "@/hooks/useUser";
import { useState, useRef, useEffect } from "react";

export default function ChattingBot() {
  const { mutate, isPending } = useChatBotMessage();
  type Message = { role: "assistant" | "user"; content: string };
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string>("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);
  const sendMessage = () => {
    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    const currentPrompt = input.trim();
    setInput("");
    mutate(
      { prompt: currentPrompt, sessionId: sessionId || undefined },
      {
        onSuccess: (data) => {
          if (data.sessionId) {
            setSessionId(data.sessionId);
          }
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.reply },
          ]);
        },
        onError: () => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "Sorry, something went wrong. Please try again later.",
            },
          ]);
        },
      },
    );
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };
  return (
    <div className="bg-amber-300 h-120 rounded-2xl border-4 border-black w-full md:w-lg px-2 md:px-10 py-3 md:py-6 shadow-[8px_8px_0px_#000] flex flex-col gap-5 md:gap-8">
      <div className="w-fit rounded-tl-xl rounded-br-xl border-2 border-black bg-amber-600 text-amber-200 py-1 px-3 text-lg font-black shadow-[3px_3px_0px_#000]">
        <h2 className="text-center">Welcome To Chatbot!</h2>
      </div>
      <div
        ref={chatContainerRef}
        className="flex-1 text-sm overflow-y-auto scrollbar-thin scrollbar-track-amber-300 scrollbar-thumb-amber-900 overflow-x-hidden space-y-2"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] ${
                msg.role === "user"
                  ? "bg-amber-600 text-white"
                  : "bg-amber-400 text-black"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isPending && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl bg-amber-400 border-2 border-black shadow-[3px_3px_0px_#000]">
              Thinking...
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 border-t border-black pt-2 px-0 md:px-3 pb-2 bg-transparent">
        <input
          className="flex-1 bg-amber-700 border-2 shadow-[2px_2px_0px_#000] text-white rounded-xl px-2 md:px-3 py-2 outline-none text-sm"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isPending}
          placeholder="Type your message..."
        />
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
            x: -1,
            rotate: -2,
            boxShadow: "7px 7px 0px #000",
          }}
          whileTap={{
            scale: 0.95,
            y: 3,
            x: 3,
            rotate: 0,
            boxShadow: "2px 2px 0px #000",
          }}
          whileInView={{ boxShadow: "5px 5px 0px #000" }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 18,
          }}
          disabled={!input.trim() || isPending}
          className="bg-amber-700 text-base md:text-lg text-amber-300 px-3 py-1 rounded-2xl border-2"
        >
          {isPending ? "...." : "Send"}
        </motion.button>
      </div>
    </div>
  );
}
