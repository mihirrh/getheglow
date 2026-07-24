"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const FAQS = [
  {
    q: "Do I need to book in advance?",
    a: "We strongly recommend booking in advance, especially for weekends and popular treatments like hair colouring and lash lifts. You can book via WhatsApp, phone, or our contact form. Same-day appointments may be available depending on availability.",
  },
  {
    q: "Where are you located?",
    a: "We are located at 5 Woodgate, Leicester, LE3 5GH. There is street parking nearby and we are easily accessible by public transport.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Tuesday, Thursday, Friday and Saturday 11am–5pm, and Sunday 11am–3pm. We are closed Monday and Wednesday.",
  },
  {
    q: "How do I book an appointment?",
    a: "The easiest way to book is via WhatsApp on 07778 698550 — just send us a message with your desired service and preferred time. You can also call us directly or use the contact form on our website.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes! We offer bespoke bridal packages including hair styling, makeup, facials, nails and more. Please contact us well in advance to discuss your requirements for your special day.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and bank transfer. Please confirm payment methods when booking your appointment.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, there is street parking available near the salon on Woodgate. Please check local parking restrictions.",
  },
  {
    q: "Do you offer treatments for sensitive skin?",
    a: "Absolutely. We offer threading (a natural, chemical-free technique), tea tree wax for sensitive skin types, and tailor all treatments to your skin's needs. Please let us know about any allergies or sensitivities when booking.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-3">
            FAQs
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-dark mb-4">
            Questions Answered
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Everything you need to know before your visit. Can't find the answer? Just ask us!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-luxury border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-display font-semibold text-dark text-base py-5 hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
