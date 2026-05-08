"use client";

import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

export default function ChattingBot() {
  return (
    <div className="bg-amber-300 h-110 rounded-2xl border-4 border-black w-lg px-10 py-6 shadow-[8px_8px_0px_#000] flex flex-col gap-8">
      <div className="w-fit rounded-tl-xl rounded-br-xl border-2 border-black bg-amber-600 text-amber-200 py-1 px-3 text-lg font-black shadow-[3px_3px_0px_#000]">
        <h2 className="text-center">Welcome To Chatbot!</h2>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-amber-300 scrollbar-thumb-amber-900 overflow-x-hidden space-y-2">
        <div className="flex">
          <div className="max-w-[80%] px-3 py-2 rounded-2xl text-base bg-amber-400 border-2 border-black shadow-[3px_3px_0px_#000] text-black">
            <ReactMarkdown>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis perspiciatis, enim sequi similique id ullam eaque
              corrupti maxime accusantium, impedit quisquam fuga. Quos dolor
              officiis hic magni doloremque dolorum architecto.
            </ReactMarkdown>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[80%] px-3 py-2 rounded-2xl text-base bg-amber-400 border-2 border-black shadow-[3px_3px_0px_#000] text-black">
            <ReactMarkdown>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis perspiciatis, enim sequi similique id ullam eaque
              corrupti maxime accusantium, impedit quisquam fuga. Quos dolor
              officiis hic magni doloremque dolorum architecto.
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="flex gap-2 border-t border-black pt-2 px-3 pb-2 bg-transparent">
        <input
          className="flex-1 bg-amber-700 border-2 shadow-[2px_2px_0px_#000] text-white rounded-xl px-3 py-2 outline-none text-sm"
          type="text"
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
          className="bg-amber-700 text-amber-300 px-3 py-1 rounded-2xl border-2"
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}
