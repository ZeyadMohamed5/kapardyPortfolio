import SkillItems from "../components/SkillItems";
import RenderList from "../shared/RenderList";
import skillsData from "../data/skills.json";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Home = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending..." });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ state: "success", msg: "Message sent. Thanks!" });
      formRef.current.reset();
    } catch (err) {
      setStatus({ state: "error", msg: "Failed to send. Try again." });
      console.error(err);
    }
  };

  return (
    <main className="bg-surface text-text">
      {/* Hero section */}
      <div className="wrapper">
        <section className="text-text min-h-[89vh] grid grid-cols-12 items-center md:py-20 py-10">
          <div className="md:col-span-5 space-y-4 col-span-12 justify-items-center-safe">
            <div className="w-60 h-60 aspect-square border-3 border-border">
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
        </section>
      </div>

      {/* About Section */}

      <section className="min-h-[100vh] bg-background py-20">
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
            <span className="bg-accent p-2">quas itaque illo alias quae.</span>
            repellat id quaerat sit culpa minus, quod dolor odit nostrum placeat
            magnam aliquam perferendis iure dolorum quas itaque illo alias quae.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="min-h-[100vh] bg-background md:py-20  py-10 ">
        <div className="wrapper border-t pt-10 border-accent">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
          <div className="grid grid-cols-12 justify-items-center mt-10 gap-6">
            <RenderList data={skillsData} ItemComponent={SkillItems} />
          </div>
        </div>
      </section>

      {/* Latest Work */}

      <section className="min-h-[100vh] bg-background md:py-20  py-10 ">
        <div className="wrapper border-t pt-10 border-accent">
          <h2 className="text-3xl font-bold text-center">My Latest Work</h2>
          <div className="grid grid-cols-12 justify-items-center mt-10 gap-6">
            <RenderList data={skillsData} ItemComponent={SkillItems} />
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] bg-background md:py-20 py-10">
        <div className="wrapper border-t pt-10 border-accent  grid grid-cols-12 items-center space-x-20">
          <div className="md:col-span-6 col-span-12">
            <h3 className="text-3xl font-bold">Lets work together</h3>
            <p className="mt-10 text-xl text-text-muted">
              Let’s turn ideas into visuals that stick. I blend strategy, style,
              and storytelling to create work that inspires and connects. If
              you’re ready to make something unforgettable, let’s make it
              happen.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="md:col-span-6 col-span-12 mt-10 space-y-3"
          >
            {/* Honeypot to reduce bots */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              className="border border-border bg-text-muted text-background p-4 outline-none w-full"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              className="border border-border bg-text-muted text-background p-4 outline-none w-full"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="border border-border bg-text-muted text-background p-4 outline-none w-full"
              rows={4}
              placeholder="Your Message..."
              required
            />
            {/* Optional: fix recipient inside the request if you used {{to_email}} in the template */}
            {/* <input type="hidden" name="to_email" value="you@yourdomain.com" /> */}

            <button
              type="submit"
              className="bg-accent px-10 py-3 disabled:opacity-60"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Submit"}
            </button>

            {status.msg && (
              <p
                className={
                  status.state === "success"
                    ? "text-green-500"
                    : status.state === "error"
                    ? "text-red-500"
                    : "text-text-muted"
                }
              >
                {status.msg}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};
export default Home;
