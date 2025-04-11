import { TypeAnimation } from "react-type-animation";
import TextCarousel from "./text-carousel";

function Hero() {
  return (
    <section className="px-4 py-10">
      <TypeAnimation
        sequence={["Hey! I'm Shaik Aaron", 500]}
        className="font-geistextrabold text-5xl"
      />
      <TextCarousel />
      <p className="font-geistmedium text-2xl pt-4">
        I've got over a year of expierience in fields of both software
        development and QA! <br />
        Right now, you'll most likely find me playing Perona 5 Royal,
        <br />
        or singing!
      </p>
    </section>
  );
}

export default Hero;
