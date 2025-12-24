"use client";

import { useState, useEffect } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);

  
  useEffect(() => {
    const stored = localStorage.getItem("subscribedEmails");
    if (stored) {
      setSubscribedEmails(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

   
    setTimeout(() => {
      // Store email in local storage
      const updatedEmails = [...subscribedEmails, email];
      localStorage.setItem("subscribedEmails", JSON.stringify(updatedEmails));
      setSubscribedEmails(updatedEmails);

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section className="relative bg-white py-20 md:py-28 px-6 overflow-hidden">
      {/* Decorative abstract shapes - exact palette from image */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Warm orange/yellow shape (top-right) */}
        <div className="absolute -top-32 -right-20 md:-right-40 w-[500px] md:w-[900px] h-[500px] md:h-[900px]">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-200 opacity-20 rounded-full blur-3xl transform rotate-12"></div>
        </div>

        {/* Deep teal/green shape (bottom-left) */}
        <div className="absolute -bottom-40 -left-20 md:-left-40 w-[450px] md:w-[800px] h-[450px] md:h-[800px]">
          <div className="w-full h-full bg-gradient-to-tr from-teal-700 via-emerald-600 to-cyan-500 opacity-15 rounded-full blur-3xl transform -rotate-12"></div>
        </div>

        {/* Small accent blobs */}
        <div className="absolute top-[20%] left-[15%] w-16 h-16 md:w-20 md:h-20 bg-orange-400/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-[25%] right-[20%] w-20 h-20 md:w-24 md:h-24 bg-teal-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
          Subscribe to get the first news
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua enim ad minim veniam.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Your email address..."
            required
            className="
              flex-1 px-6 py-4 rounded-full 
              border border-gray-200 bg-white text-gray-900 
              placeholder:text-gray-500 text-base
              focus:outline-none focus:ring-2 focus:ring-orange-400/50 
              focus:border-orange-400 shadow-sm transition-all duration-200
            "
          />

          <button
            type="submit"
            className={`
              px-10 py-4 rounded-full font-medium text-white shadow-md min-w-[140px]
              transition-all duration-300
              ${
                status === "success"
                  ? "bg-green-600 cursor-default"
                  : "bg-gray-900 hover:bg-gray-800 active:bg-black"
              }
            `}
          >
            {status === "success" ? "Subscribed!" : "Subscribe"}
          </button>
        </form>

        {/* Feedback messages */}
        {status === "success" && (
          <p className="mt-8 text-green-600 font-medium animate-fade-in">
            Thank you! You've been successfully subscribed ✓
          </p>
        )}

        {status === "error" && (
          <p className="mt-6 text-orange-600 font-medium">
            Please enter a valid email address
          </p>
        )}
      </div>
    </section>
  );
}