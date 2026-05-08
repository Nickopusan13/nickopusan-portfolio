import ContactForm from "./ContactForm";
import OurFaq from "./OurFaq";

export default function Contact() {
  return (
    <div className="min-h-dvh bg-amber-500 pt-30 flex flex-col gap-10">
      <h1 className="text-center text-8xl text-amber-200 font-black leading-none drop-shadow-[5px_5px_0px_#000]">
        {`LET'S MAKE IT`} <br /> RIDICULOUSLY GOOD
      </h1>
      <div className="w-full flex px-20 text-lg text-black font-black">
        <ContactForm />
      </div>
      <OurFaq />
    </div>
  );
}
