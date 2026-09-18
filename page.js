use client';

import { useState } from "react";

const mayaPhoto =
  "https://drive.google.com/uc?export=view&id=1koVGhvD8mkiRXRukqrklo0HbB48p9PIa";
const office1 =
  "https://drive.google.com/uc?export=view&id=1DwpoQD0VWsfGsl4J1CwtSb3Wxy5ePVJW";
const office2 =
  "https://drive.google.com/uc?export=view&id=1EqlCJsSNzGI93VgaQULRIwoFP2xiFioy";

const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    text: "Support for adults living with constant worry, overthinking, physical tension, panic, sleep difficulties, or the feeling of always bracing for something to go wrong.",
  },
  {
    number: "02",
    title: "Trauma & EMDR",
    text: "A paced, safety-focused approach for single-incident trauma and longer-standing patterns shaped by childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    text: "A grounded space for high-achieving professionals, entrepreneurs, and creatives who feel exhausted by pressure and want more sustainable ways of living and working.",
  },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Dr. Maya Reynolds works with adults who feel overwhelmed by anxiety, stress, panic, trauma, burnout, perfectionism, or the lingering effects of past experiences.",
  },
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes. Dr. Reynolds offers in-person therapy from her Santa Monica office and secure telehealth sessions for clients located in California.",
  },
  {
    q: "What approaches do you use?",
    a: "Her work integrates evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    q: "What is the therapy environment like?",
    a: "Sessions are warm, collaborative, and grounded. The Santa Monica office is quiet, private, naturally lit, comfortable, and intentionally uncluttered.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="serif text-4xl md:text-5xl leading-tight text-ink">{title}</h2>
      {children && <div className="mt-5 text-muted leading-8 text-lg">{children}</div>}
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
        <div className="container-site h-[76px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sage text-white grid place-items-center serif text-lg">
              M
            </div>
            <div>
              <div className="serif text-lg leading-none">Maya Reynolds</div>
              <div className="text-[10px] tracking-[.18em] uppercase text-muted mt-1">
                Clinical Psychologist, PsyD
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-sage">About</a>
            <a href="#services" className="hover:text-sage">Services</a>
            <a href="#approach" className="hover:text-sage">Approach</a>
            <a href="#office" className="hover:text-sage">Our Office</a>
            <a href="#faq" className="hover:text-sage">FAQs</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-sage text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-sageDark transition"
          >
            Book a Consultation <span className="ml-2"><Arrow /></span>
          </a>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t bg-white px-7 py-5 flex flex-col gap-4 text-sm">
            {["about", "services", "approach", "office", "faq", "contact"].map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="capitalize">
                {id === "faq" ? "FAQs" : id.replace("-", " ")}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="bg-cream overflow-hidden">
        <div className="container-site min-h-[680px] grid lg:grid-cols-2 items-center gap-12 py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Therapy in Santa Monica & across California</p>
            <h1 className="serif text-5xl md:text-6xl lg:text-[68px] leading-[1.03]">
              A calmer way forward starts with feeling understood.
            </h1>
            <p className="mt-7 text-lg md:text-xl leading-8 text-muted max-w-lg">
              Warm, collaborative therapy for adults navigating anxiety, panic,
              trauma, burnout, and the pressure of always having to keep it together.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="bg-sage text-white px-6 py-4 rounded-full font-semibold">
                Schedule a Consultation <Arrow />
              </a>
              <a href="#about" className="px-6 py-4 rounded-full border border-sage text-sage font-semibold">
                Learn About Maya
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-muted">
              <span>✓ In-person in Santa Monica</span>
              <span>✓ Secure telehealth in California</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-4 w-40 h-40 rounded-full bg-sand/80" />
            <div className="relative rounded-[180px_180px_28px_28px] overflow-hidden bg-sand aspect-[4/5] max-w-[520px] ml-auto">
              <img
                src={mayaPhoto}
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 -left-5 md:left-0 bg-white shadow-xl rounded-2xl px-5 py-4 max-w-[250px]">
              <p className="serif text-lg">“You don't have to carry it all alone.”</p>
              <p className="text-xs text-muted mt-2">A grounded space for reflection and change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-site grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <SectionHeading eyebrow="A space to slow down" title="You may look functional on the outside while feeling exhausted inside." />
          <div className="text-muted text-lg leading-8 space-y-5">
            <p>
              Many of the adults Dr. Reynolds works with are thoughtful, capable, and
              high-achieving—but internally feel stuck in overthinking, tension, worry,
              or emotional overwhelm.
            </p>
            <p>
              Therapy can become a place to slow down, understand what is happening,
              reconnect with yourself, and build more sustainable ways of living.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sage font-bold border-b border-sage pb-1">
              Take the first step <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-pad bg-sage text-white">
        <div className="container-site grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow !text-sand mb-4">Meet Dr. Maya Reynolds, PsyD</p>
            <h2 className="serif text-4xl md:text-5xl leading-tight">
              Practical tools, depth, and a relationship built on trust.
            </h2>
            <div className="mt-7 text-white/80 leading-8 space-y-5">
              <p>
                Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica,
                California. She offers therapy for adults experiencing anxiety, panic, trauma,
                burnout, perfectionism, and high internal pressure.
              </p>
              <p>
                Her approach is warm, collaborative, and grounded. Sessions are structured
                enough to feel supportive while leaving room for reflection and depth.
              </p>
              <p>
                Her goal is not simply symptom relief, but helping clients develop insight,
                resilience, and a stronger relationship with themselves over time.
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-[28px] p-5">
            <img
              src={mayaPhoto}
              alt="Dr. Maya Reynolds portrait"
              className="w-full aspect-[4/5] object-cover rounded-[22px]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="How I can help"
            title="Support for the things that have been weighing on you."
            center
          >
            Whether you're dealing with anxiety, the impact of past experiences, or the
            exhaustion that comes from years of pushing through, therapy can offer space to
            understand what is happening and decide what comes next.
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {services.map((service) => (
              <article key={service.number} className="bg-white rounded-[24px] p-8 min-h-[330px] flex flex-col border border-black/5 hover:-translate-y-1 transition">
                <span className="text-sage font-bold">{service.number}</span>
                <h3 className="serif text-2xl mt-10">{service.title}</h3>
                <p className="text-muted leading-7 mt-4">{service.text}</p>
                <a href="#contact" className="mt-auto pt-7 text-sage font-bold">
                  Explore support <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-pad bg-white">
        <div className="container-site grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-[28px] bg-sand p-6">
            <div className="aspect-[4/3] rounded-[20px] bg-[#d9cbbd] grid place-items-center text-center p-10">
              <div>
                <div className="text-5xl serif text-sage">Pause.</div>
                <div className="text-5xl serif text-sageDark">Reconnect.</div>
                <div className="text-5xl serif text-clay">Move forward.</div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Areas of focus" title="Therapy that considers both mind and body." />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Anxiety", "Panic", "Trauma", "Burnout", "Perfectionism", "Chronic Stress", "EMDR", "Mindfulness", "CBT"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full border border-sage/30 text-sage bg-cream">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="section-pad bg-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="My approach"
            title="Evidence-based care, with room for your whole experience."
            center
          >
            Dr. Reynolds integrates CBT, EMDR, mindfulness-based practices, and body-oriented
            techniques to explore both the emotional and physiological sides of what you're experiencing.
          </SectionHeading>

          <div className="grid md:grid-cols-4 gap-4 mt-14">
            {[
              ["01", "Warm", "You deserve to feel respected, understood, and safe enough to be honest."],
              ["02", "Collaborative", "You remain actively involved in shaping goals and the direction of therapy."],
              ["03", "Grounded", "Sessions combine structure and practical tools with space for reflection."],
              ["04", "Paced", "Trauma work is approached carefully, with safety and stabilization in mind."],
            ].map(([n, title, text]) => (
              <div key={n} className="border-t-2 border-sage pt-5">
                <span className="text-xs font-bold text-sage">{n}</span>
                <h3 className="serif text-2xl mt-5">{title}</h3>
                <p className="text-muted leading-7 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office - custom section */}
      <section id="office" className="section-pad bg-sage text-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-end">
            <SectionHeading eyebrow="New • Our office" title="A calm space to put the outside world down for a while." />
            <p className="text-white/75 text-lg leading-8 max-w-xl">
              Dr. Reynolds' Santa Monica office is quiet, private, naturally lit, and intentionally
              uncluttered—a space designed to feel grounding from the moment you arrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            <div className="overflow-hidden rounded-[28px] h-[420px]">
              <img src={office1} alt="Dr. Maya Reynolds therapy office" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[28px] h-[420px]">
              <img src={office2} alt="Dr. Maya Reynolds counseling space" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <div className="font-bold">📍 Santa Monica</div>
              <div className="text-white/70 text-sm mt-1">123th Street 45 W, Santa Monica, CA 90401</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <div className="font-bold">In-person</div>
              <div className="text-white/70 text-sm mt-1">Private sessions in a calm office environment.</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-5">
              <div className="font-bold">Telehealth</div>
              <div className="text-white/70 text-sm mt-1">Secure online sessions for clients in California.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-clay text-white">
        <div className="container-site text-center">
          <p className="eyebrow !text-white/80">Ready when you are</p>
          <h2 className="serif text-4xl md:text-6xl max-w-3xl mx-auto mt-4">
            You don't have to figure everything out before reaching out.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-white/85 text-lg leading-8">
            If you're looking for a therapist who combines practical tools with depth-oriented
            work, let's start with a conversation.
          </p>
          <a href="#contact" className="inline-flex mt-8 bg-white text-ink px-7 py-4 rounded-full font-bold">
            Book a Consultation <span className="ml-2"><Arrow /></span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad bg-white">
        <div className="container-site grid lg:grid-cols-[.75fr_1.25fr] gap-14">
          <SectionHeading eyebrow="FAQs" title="A few things you may be wondering." />
          <div>
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-t border-black/10">
                <button
                  className="w-full py-6 flex items-center justify-between text-left gap-6"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <span className="text-2xl text-sage">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <p className="pb-6 text-muted leading-7 max-w-2xl">{faq.a}</p>
                )}
              </div>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-pad bg-cream">
        <div className="container-site grid lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Let's connect</p>
            <h2 className="serif text-5xl leading-tight">Take the next step at your own pace.</h2>
            <p className="text-muted text-lg leading-8 mt-6">
              Reach out to learn more about therapy with Dr. Maya Reynolds and whether the practice
              may be a good fit for what you're looking for.
            </p>
          </div>

          <form className="bg-white rounded-[28px] p-7 md:p-9 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="text-sm font-semibold">
                Name
                <input className="mt-2 w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-sage" placeholder="Your name" />
              </label>
              <label className="text-sm font-semibold">
                Email
                <input type="email" className="mt-2 w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-sage" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block text-sm font-semibold mt-5">
              How can I help?
              <textarea rows="5" className="mt-2 w-full border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-sage" placeholder="Tell me a little about what brings you to therapy." />
            </label>
            <button className="mt-5 w-full bg-sage text-white rounded-xl py-4 font-bold hover:bg-sageDark transition">
              Send an Inquiry
            </button>
            <p className="text-xs text-muted mt-4">
              This demo form is for the assignment prototype and does not send messages yet.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white">
        <div className="container-site py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="serif text-2xl">Dr. Maya Reynolds, PsyD</div>
            <p className="text-white/60 mt-3 text-sm leading-6">
              Licensed Clinical Psychologist<br />
              Santa Monica, California
            </p>
          </div>
          <div>
            <p className="font-bold">Office</p>
            <p className="text-white/60 text-sm leading-6 mt-3">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-bold">Availability</p>
            <p className="text-white/60 text-sm leading-6 mt-3">
              In-person therapy in Santa Monica<br />
              Secure telehealth across California
            </p>
          </div>
        </div>
        <div className="container-site py-5 border-t border-white/10 text-xs text-white/40">
          © 2026 Dr. Maya Reynolds, PsyD. Assignment prototype.
        </div>
      </footer>
    </main>
  );
}
