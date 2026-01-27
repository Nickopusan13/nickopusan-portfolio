"use client";

import { useState, useEffect, useRef } from "react";
import { postUserChatBot } from "@/utils/api";
import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";
import { Bot } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatBotProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sessionId: string | undefined;
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function ChatBot({
  messages,
  setMessages,
  sessionId,
  setSessionId,
}: ChatBotProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    if (!sessionId && typeof window !== "undefined") {
      const existing = localStorage.getItem("chatbot_session_id");
      if (existing) setSessionId(existing);
    }
  }, [sessionId, setSessionId]);

  useEffect(() => {
    if (sessionId && typeof window !== "undefined") {
      localStorage.setItem("chatbot_session_id", sessionId);
    }
  }, [sessionId]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userInput = input.trim();
    const userMessage: Message = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await postUserChatBot({
        prompt: userInput,
        session_id: sessionId,
      });
      const botMessage: Message = { sender: "bot", text: res.reply };
      setMessages((prev) => [...prev, botMessage]);
      setSessionId(res.session_id);
    } catch (error: unknown) {
      const errorMsg: Message = {
        sender: "bot",
        text: "I'm having trouble connecting. Please try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col h-full text-white">
      <div className="relative z-10 flex flex-col items-center justify-center pt-4 pb-3 px-4 bg-slate-800/40 backdrop-blur-sm border-b border-slate-700/50">
        <motion.div
          className="flex items-center gap-3 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="p-2 bg-linear-to-br from-blue-500 to-violet-500 rounded-xl shadow-lg"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Bot className="w-5 h-5 text-white" />
          </motion.div>
          <h1 className="text-lg font-bold bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI Assistant
          </h1>
        </motion.div>
        <p className="text-xs text-slate-400">
          {`Ask me anything, I'm here to help!`}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-none space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
        {loading && <Spinner />}
      </div>
      <div className="flex gap-2 border-t border-white/10 mt-2 pt-2 px-3 pb-2 bg-transparent">
        <input
          className="flex-1 bg-white/10 text-white rounded-xl px-3 py-2 outline-none text-sm"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 px-3 py-2 rounded-xl font-medium hover:bg-blue-700 transition text-sm disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
