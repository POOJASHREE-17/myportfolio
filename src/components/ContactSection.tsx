import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageSquare, Github, Linkedin, Sparkles } from "lucide-react";
import InteractiveEnvelope from "./InteractiveEnvelope";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const email = import.meta.env.VITE_CONTACT_EMAIL || "your-email@example.com";
  const linkedin = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com";
  const github = import.meta.env.VITE_GITHUB_URL || "https://github.com";

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio Inquiry`,
    },
    {
      icon: MessageSquare,
      label: "Let's Chat",
      value: "Connect on LinkedIn",
      href: linkedin,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden bg-[#fffcfc]"
    >
      {/* Delicate background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-rose mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project idea or want to connect, feel free to reach out.
          </p>
        </motion.div>

        {/* INTERACTIVE ENVELOPE CENTERPIECE */}
        <div className="mb-20">
          <InteractiveEnvelope />
        </div>

        {/* SECONDARY CONTACT METHODS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(236,72,153,0.1)" }}
              className="bg-white/80 backdrop-blur-sm border border-pink-50 p-6 rounded-[32px] flex items-center gap-5 text-left transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <method.icon size={24} />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1">
                  {method.label}
                </h3>
                <p className="text-gray-500 text-sm font-medium">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* SOCIAL ICONS (Pastel & Delicate) */}
        <div className="flex justify-center gap-10">
          {[
            { Icon: Linkedin, href: linkedin },
            { Icon: Github, href: github },
            { Icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio Inquiry&body=Hi Pooja, I came through your portfolio...` }
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.2, color: "#f472b6", y: -5, backgroundColor: "rgba(255, 182, 193, 0.2)" }}
              className="p-3 rounded-full text-pink-300 hover:drop-shadow-[0_0_15px_rgba(244,114,182,0.6)] transition-all cursor-pointer"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
