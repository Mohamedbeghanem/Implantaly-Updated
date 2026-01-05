import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq2 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "À qui s’adressent les workshops ?",
      answer:
        "In modern dental clinics, fully equipped with the latest digital and surgical technologies.",
    },
    {
      id: "faq-2",
      question: "Les formations sont-elles pratiques ?",
      answer:
        "Oui. Tous les workshops sont orientés hands-on, avec une pratique encadrée et des démonstrations expertes.",
    },
    {
      id: "faq-3",
      question: "Les formations chirurgicales et labo sont-elles séparées ?",
      answer:
        "Oui. Les workflows chirurgicaux et prothétiques sont proposés en formations distinctes et indépendantes.",
    },
    {
      id: "faq-4",
      question: "Le matériel est-il fourni ?",
      answer:
        "Oui. Tout le matériel pédagogique et technique nécessaire est mis à disposition des participants.",
    },
    {
      id: "faq-5",
      question: "Reçoit-on une attestation de participation ?",
      answer:
        "Oui. Une attestation officielle Alta Academy est remise à la fin de chaque workshop.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq2 };
