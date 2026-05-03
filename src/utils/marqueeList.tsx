import Image from "next/image";

const item = [
  {
    desc: "LET'S COLLABORATE",
    iconSrc: "/assets/emote/Dino.svg",
  },
  { desc: "DROP ME A LINE", iconSrc: "/assets/emote/Bussiness.svg" },
  {
    desc: "OPEN FOR PROJECTS",
    iconSrc: "/assets/emote/Chat-Email.svg",
  },
  {
    desc: "LET'S CREATE SOMETHING BEAUTIFUL",
    iconSrc: "/assets/emote/Com-Dev.svg",
  },
];

export const marqueeList = (
  <div className="flex items-center gap-1 w-fit">
    {item.map((item, idx) => {
      return (
        <span
          key={idx}
          className="mx-10 flex items-center gap-10 justify-center"
        >
          {item.desc}
          <Image width={50} height={50} src={item.iconSrc} alt={item.desc} />
        </span>
      );
    })}
  </div>
);
