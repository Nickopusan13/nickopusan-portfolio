"use client";

interface TheProjectSecProps {
  role: string;
  solution: string;
  techStack: string[];
  performance: string[];
  challenges: string;
  architecture: string;
}

function ItemGrid({
  paragraph,
  title,
  className,
  textSmall,
}: {
  paragraph: string;
  title: string;
  className: string;
  textSmall: boolean;
}) {
  return (
    <div className="rounded-tr-2xl rounded-bl-2xl border-4 border-black flex flex-col gap-3 bg-amber-100 p-2 shadow-[3px_3px_0px_#000]">
      <p
        className={`${className} w-fit -rotate-2 rounded-sm border-2 border-black px-3 py-0.5 text-sm font-black shadow-[3px_3px_0px_#000]`}
      >
        {title}
      </p>
      <p
        className={`${textSmall ? "text-sm" : "text-lg"} text-justify font-black leading-relaxed`}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default function TheProjectSec({
  role,
  solution,
  techStack,
  performance,
  challenges,
  architecture,
}: TheProjectSecProps) {
  return (
    <section className="px-2 md:px-6 xl:px-20 items-center flex justify-center bg-amber-600">
      <div className="flex relative py-7 w-full flex-col gap-6 rounded-tr-3xl rounded-bl-3xl border-4 border-black bg-amber-300 p-3 shadow-[4px_4px_0px_#000] lg:p-8">
        <div className="absolute -right-4 -top-5 rotate-6 rounded-tr-xl rounded-bl-xl border-2 border-black bg-orange-500 px-4 py-1 text-sm font-black shadow-[4px_4px_0px_#000] sm:text-base">
          PROJECT DETAILS
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ItemGrid
              textSmall={false}
              title="ROLE"
              paragraph={role}
              className="bg-amber-400"
            />
            <ItemGrid
              textSmall={true}
              title="CHALLENGES"
              paragraph={challenges}
              className="bg-red-400"
            />
            <ItemGrid
              textSmall={true}
              title="SOLUTION"
              paragraph={solution}
              className="bg-green-400"
            />
            <div className="rounded-tr-2xl rounded-bl-2xl border-4 border-black flex flex-col gap-3 bg-amber-100 p-2 shadow-[3px_3px_0px_#000]">
              <p className="w-fit bg-blue-400 -rotate-2 rounded-sm border-2 border-black px-3 py-0.5 text-sm font-black shadow-[3px_3px_0px_#000]">
                PERFORMANCE
              </p>
              <ul className="flex flex-col gap-1">
                {performance.map((perform, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-black text-sm"
                  >
                    <span className="mt-2 size-2 shrink-0 rounded-full border-2 border-black bg-red-500" />
                    <span className="leading-relaxed">{perform}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-tr-2xl rounded-bl-2xl border-4 border-black flex flex-col gap-3 bg-amber-100 p-2 shadow-[3px_3px_0px_#000]">
              <p className="w-fit bg-purple-400 -rotate-2 rounded-sm border-2 border-black px-3 py-0.5 text-sm font-black shadow-[3px_3px_0px_#000]">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border-2 border-black bg-yellow-300 px-3 py-0.5 text-sm font-black shadow-[2px_2px_0px_#000]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <ItemGrid
              textSmall={true}
              title="ARCHITECTURE"
              paragraph={architecture}
              className="bg-pink-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
