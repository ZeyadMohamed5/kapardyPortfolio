import SkillItems from "../components/SkillItems";
import RenderList from "../shared/RenderList";
import skillsData from "../data/skills.json";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import ContactForm from "../components/ContactForm";

const Home = () => {
  // const ref = useRef(null);
  // const heroRef = useRef(null);
  // const { scrollYProgress: heroProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // });

  // Opacity fade
  // const rawOpacity = useTransform(heroProgress, [0, 1], [1, 0.25]);
  // const opacity = useSpring(rawOpacity, {
  //   stiffness: 80,
  //   damping: 20,
  //   mass: 0.6,
  // });

  // Blur filter
  // const blurAmt = useTransform(heroProgress, [0, 0.7, 1], [0, 8, 12]);
  // const filter = useMotionTemplate`blur(${blurAmt}px)`;

  // const { scrollYProgress: pageProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });
  // const rawY = useTransform(pageProgress, [0, 1], ["0%", "-95%"]);

  // const y = useSpring(rawY, {
  //   stiffness: 140,
  //   damping: 30,
  //   mass: 0.5,
  // });

  const container = useRef(null);

  const { scrollYProgress: containerProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // track until hero leaves top
  });

  // Opacity fade
  const rawOpacity = useTransform(containerProgress, [0, 0.2], [1, 0]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  // Blur filter
  const blurAmt = useTransform(containerProgress, [0, 0.7, 0.14], [0, 8, 12]);
  const filter = useMotionTemplate`blur(${blurAmt}px)`;

  return (
    <main
      ref={container}
      className="bg-surface text-text relative overscroll-none h-[500vh]"
    >
      {/* Hero section */}
      <div className="wrapper sticky top-0 pt-10">
        <motion.section
          className="text-text h-[100vh] grid grid-cols-12 items-center md:py-20 py-10"
          style={{ filter, opacity, willChange: "filter , opacity" }}
        >
          <div className="md:col-span-5 col-span-12 grid place-items-center space-y-4">
            <div className="w-60 h-60 aspect-square border-3 border-border relative">
              <img
                className="w-full aspect-square object-cover"
                src="./assets/qabardy.jpg"
                alt="Qabardy-Photo"
              />
            </div>
            <h2 className="capitalize font-bold text-2xl">mohamed qabardy</h2>
            <p className="text-2xl capitalize font-light">
              Art Director & designer
            </p>
          </div>
          <div className="md:col-span-7 col-span-12 mt-10">
            <span className="capitalize font-bold text-2xl">bio:</span>
            <p className="leading-8 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              vero non omnis, hic possimus ad at, quos fugit quam nobis pariatur
              odit? Ducimus, natus quo. Aperiam qui voluptates quis inventore.
            </p>
          </div>
        </motion.section>
      </div>

      <div className="z-30 relative" id="about">
        {/* About Section */}
        <section className="min-h-[100vh] bg-background py-20 relative">
          <div className="wrapper">
            <p className="text-2xl tracking-wider leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              voluptates, voluptatum laboriosam quod obcaecati expedita id dolor
              saepe a voluptatibus deserunt, repellendus asperiores vitae esse
              libero quas doloremque corporis necessitatibus?
            </p>
            <p className="mt-10 text-xl leading-8 tracking-wide">
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
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="min-h-[100vh] bg-background md:py-20 py-10">
          <div className="wrapper border-t pt-10 border-accent">
            <h2 className="text-3xl font-bold text-center">My Skills</h2>
            <div className="grid grid-cols-12  justify-items-center place-items-center mt-10 gap-6">
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
