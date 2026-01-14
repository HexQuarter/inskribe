import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why not just use internal logs or a database timestamp?",
    answer: "Internal logs are controlled by you — which means they can be modified, deleted, or disputed. Inskribe anchors proofs to Bitcoin, an external, neutral, immutable ledger. No single party controls it, so timestamps are independently verifiable by anyone."
  },
  {
    question: "Is this an NFT?",
    answer: "No. Inskribe uses Bitcoin as a timestamp authority, not as a marketplace or collectible system. We don't create tradeable tokens. We create verification proofs — portable, self-contained bundles that prove authenticity and lineage."
  },
  {
    question: "What actually goes on-chain?",
    answer: "Only a Merkle root hash (32 bytes) is written to Bitcoin. Your content, metadata, and full proof structure remain off-chain in your chosen storage. This preserves privacy while guaranteeing the timestamp."
  },
  {
    question: "What about private or sensitive content?",
    answer: "Inskribe never stores your content unless you explicitly upload it to our cloud. In hash-only mode, we process cryptographic fingerprints — we never see the underlying data. For subset proofs, zero-knowledge techniques allow verification without revealing the full dataset."
  },
  {
    question: "How do these proofs hold up legally?",
    answer: "Inskribe Proof Packets are designed for legal-grade verification. They're independently verifiable, tamper-evident, and anchored to a publicly auditable ledger. While we don't claim legal admissibility (which varies by jurisdiction), the proofs meet a high bar for authenticity evidence. Several customers use them in litigation and compliance contexts."
  },
  {
    question: "Can I verify proofs offline?",
    answer: "Yes. Every Proof Packet is self-contained. We provide an offline verification tool that validates the entire chain — from content hash to Merkle proof to Bitcoin anchor — without connecting to Inskribe servers."
  },
  {
    question: "What's the difference between API and white-label?",
    answer: "The API lets you integrate Inskribe into your product — you build the UX, we handle provenance. White-label gives you a fully branded deployment — your domain, your UI theme, isolated data tenancy — as if you built the system yourself."
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
            Common questions about Proof Packets, privacy, and verification.
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
