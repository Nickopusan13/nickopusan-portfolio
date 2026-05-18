const item = [
  {
    desc: "LET'S COLLABORATE",
  },
  { desc: "DROP ME A LINE" },
  {
    desc: "OPEN FOR PROJECTS",
  },
  {
    desc: "LET'S CREATE SOMETHING BEAUTIFUL",
  },
];

export const marqueeList = (
  <div className="flex items-center w-fit">
    {item.map((item, idx) => {
      return (
        <span key={idx} className="flex">
          <p className="mx-5 md:mx-10">{item.desc}</p>
          <span>*</span>
        </span>
      );
    })}
  </div>
);
