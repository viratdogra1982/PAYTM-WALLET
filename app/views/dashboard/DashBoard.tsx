"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

const glass = "backdrop-blur-lg bg-white/10 border border-blue-400/20 shadow-2xl";
const glowBtn = "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold rounded-full px-7 py-3 shadow-lg hover:shadow-blue-400/50 transition-all duration-200 ring-2 ring-blue-400/40 ring-offset-2 ring-offset-[#0A0F1F]";

const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 }
  })
};

export default function Home() {
  const controls = useAnimation();
  const router = useRouter();
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const sequence = async () => {
      await controls.start((i) => ({
        ...letterAnimation.visible(i),
      }));
      timeout = setTimeout(() => controls.start("hidden"), 400);
    };
    sequence();
    controls.set("hidden");
    const interval = setInterval(sequence, 400 + 0.13 * "Trusted by Users.".length * 1000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [controls]);

    return (
    <>
      <div className="fixed inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute left-[-10vw] top-[-10vh] w-[40vw] h-[40vw] bg-blue-700/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-[-10vw] top-[20vh] w-[30vw] h-[30vw] bg-blue-400/30 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute left-[30vw] bottom-[-10vh] w-[40vw] h-[20vw] bg-blue-900/30 rounded-full blur-2xl"
        />
      </div>
      <motion.main
        initial={{ scale: 0.97, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="min-h-screen bg-[#0A0F1F] text-white relative bg-[length:80px_80px] bg-[linear-gradient(transparent_79px,#232733_80px),linear-gradient(90deg,transparent_79px,#232733_80px)]"
      >
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex items-center justify-between px-8 py-3 shadow-2xl mb-2 bg-transparent pt-6"
        >
          <div className="text-4xl md:text-5xl font-extrabold flex items-center gap-2">
            <span className="text-white drop-shadow-lg">
              Xeno<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Pay</span>
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 16px #60a5fa" }}
            whileTap={{ scale: 0.97 }}
            className={glowBtn}
            onClick={() => router.push('/login')}
          >
            Login
          </motion.button>
        </motion.nav>

        <section className="pt-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#F1F5F9] drop-shadow-xl">
              Trusted by Users.<br />
              <span className="text-blue-400">Powered by Security.</span>
            </h1>
            <p className="text-lg text-[#CBD5E1]">
              Experience fast, reliable, and secure digital payments with futuristic security.
            </p>
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 0 24px #60a5fa" }}
              whileTap={{ scale: 0.96 }}
              className={glowBtn + " text-lg"}
              onClick={() => router.push('/login')}
            >
              Get Started
            </motion.button>
          </motion.div>

          <div className="flex justify-center items-center w-full h-ful">
            <motion.div
              initial={{ opacity: 1, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.08, 1] }}
              transition={{
                opacity: { duration: 0.6 },
                y: { duration: 0.6 },
                scale: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
              }}
              className="rounded-3xl border-4 border-blue-900/60 bg-gradient-to-br from-[#1a2740] to-[#22345a] p-2 shadow-2xl max-w-xs w-full"
            >
              <Image
                src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-8b6c-622f-8a0f-36134b924a38/raw?se=2025-07-21T14%3A41%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=9eeeeeef-28fa-5438-a1b0-735128ad49cc&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-20T18%3A34%3A55Z&ske=2025-07-21T18%3A34%3A55Z&sks=b&skv=2024-08-04&sig=zaIfTwRa7sY5EiU%2BCMhcuAhiGB2KLcIxb2wl6JcjmP8%3D"
                alt="Illustration representing payment services"
                width={500}
                height={370}
                className="max-w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="mt-16 px-6 flex justify-center">
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8 w-max pb-6"
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' }}
              style={{ willChange: 'transform' }}
            >
              {[
                { icon: "🏠", label: "Home" },
                { icon: "🔁", label: "P2P Transaction" },
                { icon: "➕", label: "Add Money" },
                { icon: "📄", label: "Transaction History" },
                { icon: "🔒", label: "Security" },
                { icon: "🏠", label: "Home" },
                { icon: "🔁", label: "P2P Transaction" },
                { icon: "➕", label: "Add Money" },
                { icon: "📄", label: "Transaction History" },
                { icon: "🔒", label: "Security" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: (index % 6) * 0.18, type: "spring", stiffness: 80, damping: 12 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.13, boxShadow: "0 0 40px #60a5fa" }}
                  whileTap={{ scale: 0.96 }}
                  className={`min-w-[200px] flex flex-col items-center justify-center p-6 rounded-2xl border border-blue-400/20 shadow-lg transition-transform cursor-pointer bg-transparent`}
                  style={{ boxShadow: "0 4px 32px 0 rgba(30,64,175,0.25)" }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700/30 shadow-lg text-3xl text-blue-300 mb-2">{item.icon}</span>
                  <span className="text-white font-semibold">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
    
 <div
  className="flex justify-center items-center w-full h-full mt-16 mb-16"
  style={{ perspective: 1000 }}
>
  <motion.div
    initial={{ rotateY: 0, opacity: 0 }}
    animate={{ rotateY: 360, opacity: 1 }}
    whileHover={{ scale: 1.05, rotateY: 380, boxShadow: "0 0 20px #60a5fa" }}
    whileTap={{ scale: 0.95, rotateY: 400 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    style={{
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      display: "inline-block",
    }}
  >
    <img
      src="./paytm-2.jpg"
      alt="Rotating Paytm Image"
      className="rounded-2xl w-full h-auto"
      style={{ willChange: "transform", cursor: "pointer" }}
    />
  </motion.div>
</div>
          </motion.main>
      <section className="max-w-3xl mx-auto mt-12 mb-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>
      <footer className="text-center text-gray-400 text-sm py-4">
        <p>© 2025 XenoPay. All rights reserved.</p>
        <p>Powered by XenoPay</p>
      </footer>

    </>
  );
}

import { useState } from "react";

const faqData = [
  {
    question: "What is XenoPay?",
    answer: "XenoPay is a secure digital payment platform that allows you to send, receive, and manage money easily and safely.",
  },
  {
    question: "How do I create a XenoPay account?",
    answer: "Simply click on the 'Get Started' button and follow the registration steps to set up your XenoPay account.",
  },
  {
    question: "How can I add money to my XenoPay wallet?",
    answer: "You can add money using your dummy bank account from the 'Add Money' section.",
  },
  {
    question: "How do I send money to someone using XenoPay?",
    answer: "Go to the 'P2P Transaction' section, enter the recipient's details, and the amount you wish to send.",
  },
  {
    question: "How do I view my transaction history?",
    answer: "Navigate to the 'Transaction History' section to see all your past transactions in detail.",
  },
  {
    question: "How do I view my profile?",
    answer: "Go to the 'Home' section to see your profile details."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => toggle(idx)}
            className={`w-full text-left px-5 py-4 rounded-lg border border-blue-400/40 text-lg font-semibold focus:outline-none flex justify-between items-center transition-all duration-200 ${openIndex === idx ? 'ring-2 ring-blue-400' : ''}`}
          >
            <span>{item.question}</span>
            <span className="ml-4 text-blue-300">{openIndex === idx ? '▲' : '▼'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-5 py-3 text-[#cbd5e1] border-l-4 border-blue-400/40 rounded-b-lg animate-fade-in">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
