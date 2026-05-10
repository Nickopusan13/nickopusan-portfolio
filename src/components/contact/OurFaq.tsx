"use client";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../ui/accordion";

const faqItem = [
  {
    title: "Can you build both frontend and backend?",
    content:
      "Yes! I'm a full-stack developer. I specialize in React & Next.js for beautiful frontends, and Node.js + Python for powerful backends. I also create custom automation tools and web scrapers whenever the project requires it.",
  },
  {
    title: "What kind of projects do you take?",
    content:
      "I love working on custom web applications, SaaS platforms, landing pages, internal tools, automation scripts, and web scraping solutions. Whether you need a beautiful frontend, a robust backend, or smart automation — I can handle the full scope.",
  },
  {
    title: "What does your working process look like?",
    content:
      "I usually start with a detailed discovery call, followed by research and wireframing. I keep you updated regularly with iterative deliveries so you can give feedback throughout.",
  },
  {
    title: "Do you offer revisions and post-launch support?",
    content:
      "Yes. Every project includes 2 rounds of revisions. I also offer maintenance and support packages for ongoing updates after launch.",
  },
];

export default function OurFaq() {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center gap-10 min-h-svh">
      <h2 className="text-center text-6xl text-amber-200 font-black leading-none drop-shadow-[5px_5px_0px_#000]">
        OUR FAQS
      </h2>
      <div className="w-6xl gap-5 flex flex-col">
        <div className="flex w-full items-center justify-center">
          <h3 className="py-2 px-5 bg-amber-700 text-xl text-center border-4 border-black font-black shadow-[4px_4px_0px_#000] rounded-2xl text-amber-200">
            Have questions? We’ve got answers!
            <br />
            Can’t find yours? Just use the contact form above and we’ll get back
            to you.
          </h3>
        </div>
        <div className="w-full flex flex-col itemcen justify-center">
          <Accordion
            type="multiple"
            defaultValue={[]}
            className="flex flex-col gap-5"
          >
            {faqItem.map((item, idx) => {
              return (
                <AccordionItem
                  className="bg-amber-200 border-3 border-black rounded-tl-xl rounded-br-xl shadow-[5px_5px_0px_#000] px-5"
                  value={item.title}
                  key={idx}
                >
                  <AccordionTrigger className="text-3xl font-black text-orange-700">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-xl text-black">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
