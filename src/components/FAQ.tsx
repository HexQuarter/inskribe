import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why Bitcoin instead of another blockchain?",
    answer: "Bitcoin is the most secure, decentralized, and battle-tested blockchain. Its proof-of-work consensus and 15+ year track record make it the most reliable neutral timestamp authority. We use it purely for anchoring — not tokens or trading."
  },
  {
    question: "Is this an NFT or cryptocurrency?",
    answer: "No. Inskribe doesn't create tradeable tokens or collectibles. We create verification proofs — portable, self-contained bundles that prove when something existed and who created it. Bitcoin is used solely as a timestamp anchor."
  },
  {
    question: "What actually goes on the blockchain?",
    answer: "Only a Merkle root hash (32 bytes) is written to Bitcoin. Your actual content, metadata, and full proof structure remain off-chain in your chosen storage. This preserves privacy while guaranteeing the timestamp."
  },
  {
    question: "What about private or sensitive content?",
    answer: "Inskribe never stores your content unless you explicitly choose cloud storage. In hash-only mode, we process cryptographic fingerprints — we never see the underlying data. Your content stays with you."
  },
  {
    question: "Can I prove authorship of just part of a work?",
    answer: "Yes. Proof Packets support subset proofs. If you've sealed a complete manuscript, you can later prove that a specific chapter or excerpt was part of the original — without revealing the rest."
  },
  {
    question: "How do I verify a Proof Packet?",
    answer: "Use our web verifier or offline verification tool. Verification is completely independent — it doesn't require our servers or infrastructure. Anyone with the Proof Packet can validate it against the Bitcoin blockchain."
  }
];

const FAQ = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about Proof Packets, Bitcoin anchoring, and verification.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-background/50 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
