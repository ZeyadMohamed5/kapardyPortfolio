import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
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

        <button
          type="submit"
          className="bg-accent px-10 py-3 disabled:opacity-60 cursor-pointer hover:bg-accent-hover hover:scale-105 duration-400"
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
  );
};
export default ContactForm;
