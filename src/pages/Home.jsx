import SkillItems from "../components/SkillItems";
import RenderList from "../shared/RenderList";
import skillsData from "../data/skills.json";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  // Track scroll progress for initial hero entrance animation
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end end"], // From when hero enters viewport to center
  });

  // Track scroll progress of the about section to trigger exit animation
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"], // When about section enters viewport to when it reaches top
  });

  // Initial entrance animation (blur/scale from start)
  const entranceOpacity = useTransform(heroProgress, [0, 0.5], [0.3, 1]);
  const entranceBlur = useTransform(heroProgress, [0, 0.5], [8, 0]);
  const entranceScale = useTransform(heroProgress, [0, 0.5], [0.8, 1]);

  // Exit animation (when about section covers it)
  const exitOpacity = useTransform(aboutProgress, [0, 1], [1, 0.3]);
  const exitBlur = useTransform(aboutProgress, [0, 1], [0, 8]);
  const exitScale = useTransform(aboutProgress, [0, 1], [1, 0.9]);

  // Combine both animations - entrance then exit
  const combinedOpacity = useTransform(
    () => entranceOpacity.get() * exitOpacity.get()
  );

  const combinedBlur = useTransform(() =>
    Math.max(entranceBlur.get(), exitBlur.get())
  );

  const combinedScale = useTransform(
    () => entranceScale.get() * exitScale.get()
  );

  // Apply spring animations
  const opacity = useSpring(combinedOpacity, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const blurAmt = useSpring(combinedBlur, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  const scale = useSpring(combinedScale, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const filter = useMotionTemplate`blur(${blurAmt}px)`;

  const curtainRef = useRef(null);

  const { scrollYProgress: curtainRefProgress } = useScroll({
    target: curtainRef,
    offset: ["start start", "end start"],
  });

  const leftX = useTransform(curtainRefProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(curtainRefProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-surface text-text relative overscroll-none">
      {/* Curtain section */}
      <div className="h-[100vh] relative" ref={curtainRef}>
        {/* Curtains wrapper */}
        <div className="flex flex-col md:flex-row w-full h-screen">
          {/* Left curtain */}
          <motion.div
            style={{ x: leftX }}
            className="fixed md:fixed top-0 left-0 w-full md:w-1/2 h-1/2 md:h-screen z-110  overflow-hidden"
          >
            <img
              src="assets/curtain1.JPG"
              alt="Left curtain"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0  bg-black/50 z-100"></div>

            {/* Text inside left curtain */}
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-200 font-intro overflow-hidden">
              <motion.h1
                initial={{
                  y: -100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-5xl md:text-8xl text-background uppercase shadow"
              >
                mohamed
              </motion.h1>
            </div>
          </motion.div>

          {/* Right curtain */}
          <motion.div
            style={{ x: rightX }}
            className="fixed md:fixed bottom-0 md:top-0 right-0 w-full md:w-1/2 h-1/2 md:h-screen z-110 overflow-hidden"
          >
            <img
              src="assets/curtain2.JPG"
              alt="Right curtain"
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-100"></div>

            {/* Text inside right curtain */}
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-200 font-intro overflow-hidden">
              <motion.h1
                initial={{
                  y: 100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-5xl md:text-8xl text-background uppercase shadow"
              >
                kabardy
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero section - sticky positioned */}
      <div className="sticky top-15 z-10 h-[100vh]">
        <div className="wrapper ">
          <motion.section
            ref={heroRef}
            className="text-text grid grid-cols-12 items-center md:py-20 py-10 h-full"
            style={{
              filter,
              opacity,
              scale,
              willChange: "filter, opacity, transform",
            }}
          >
            <div className="md:col-span-4 col-span-12 grid place-items-center space-y-4 self-start">
              <h2 className="capitalize font-bold text-2xl">mohamed kabardy</h2>
              <p className="text-2xl capitalize font-light">
                Art Director & set designer
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 grid place-items-center ">
              <img
                className="w-full object-cover"
                src="./assets/qabardinonew.png"
                alt="Qabardy-Photo"
              />
            </div>
            <div className="md:col-span-4 col-span-12 mt-5">
              <span className="capitalize font-bold text-2xl">bio:</span>
              <p className="leading-8 text-md ">
                My name is Mohamed kapardy . I am an Art Director and Set
                Designer, currently studying in my final year at the Faculty of
                Fine Arts, Décor Department,(Expressive Arts).
              </p>
            </div>
          </motion.section>
        </div>
      </div>

      {/* About and other sections with higher z-index to cover hero */}
      <div className="relative z-20" id="about">
        {/* About Section */}
        <section
          ref={aboutRef}
          className="min-h-[100vh] bg-background py-20 relative"
        >
          <div className="wrapper">
            <p className="text-2xl tracking-wider leading-10">
              For me, design is not just about creating spaces or visuals — it
              is about shaping experiences that reflect{" "}
              <span className="bg-accent p-2">
                identity, emotion, and meaning.
              </span>{" "}
              Every project I work on is a chance to challenge myself, to grow,
              and to create something that truly makes me proud. I am committed
              to developing my skills to grow as a professional in the field,
              expanding my knowledge, and building a career that allows me to
              transform ideas into powerful visual stories.
            </p>
            {/* <p className="mt-10 text-xl leading-8 tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              repellat id quaerat sit culpa minus,
              <span className="bg-accent p-2">
                quod dolor odit nostrum placeat
              </span>
              magnam aliquam perferendis iure dolorum magnam aliquam perferendis
              iure dolorum magnam aliquam perferendis iure dolorum
              <span className="bg-accent p-2">
                quas itaque illo alias quae.
              </span>
              repellat id quaerat sit culpa minus, quod dolor odit nostrum
              placeat magnam aliquam perferendis iure dolorum quas itaque illo
              alias quae.
            </p> */}
          </div>
        </section>

        {/* Skills */}
        <section className="min-h-[100vh] bg-background md:py-20 py-10">
          <div className="wrapper border-t pt-10 border-accent">
            <h2 className="text-3xl font-bold text-center">My Skills</h2>
            <div className="grid grid-cols-12 justify-items-center place-items-center mt-10 gap-6">
              <RenderList data={skillsData} ItemComponent={SkillItems} />
            </div>
          </div>
        </section>

        {/* Latest Work */}
        <section
          className="min-h-[100vh] bg-background md:py-20 py-10"
          id="work"
        >
          <div className="wrapper border-t pt-10 border-accent ">
            <h2 className="text-3xl font-bold text-center">My Latest Work</h2>
            <div className="grid grid-cols-12 justify-items-center place-items-center mt-10 gap-6">
              <RenderList data={skillsData} ItemComponent={SkillItems} />
            </div>
          </div>
        </section>

        {/* Contact me form */}
        <section
          className="min-h-[100vh] bg-background md:py-20 py-10 "
          id="contact"
        >
          <div className="wrapper border-t pt-10 border-accent grid grid-cols-12 items-center md:gap-10">
            <div className="md:col-span-6 col-span-12 w-full">
              <h3 className="text-3xl font-bold">Lets work together</h3>
              <p className="mt-10 text-xl text-text-muted">
                Let's turn ideas into visuals that stick. I blend strategy,
                style, and storytelling to create work that inspires and
                connects. If you're ready to make something unforgettable, let's
                make it happen.
              </p>
              <ul className="flex items-center text-2xl gap-2 mt-5">
                <li>
                  <a
                    className="inline-block hover:text-accent-hover hover:scale-125 duration-200"
                    href=""
                  >
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    className="inline-block hover:text-accent-hover hover:scale-125 duration-200"
                    href=""
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    className="inline-block hover:text-accent-hover hover:scale-125 duration-200"
                    href=""
                  >
                    <i className="fa-brands fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
