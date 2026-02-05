"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@/hooks/use-translations";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading,
  items,
}: Faq1Props) => {
  const { t } = useTranslations();
  const resolvedHeading = heading ?? t("liveSurgery.faq.title");
  const resolvedItems = items ?? [
    {
      id: "faq-1",
      question: t("liveSurgery.faq.items.0.q"),
      answer: t("liveSurgery.faq.items.0.a"),
    },
    {
      id: "faq-2",
      question: t("liveSurgery.faq.items.1.q"),
      answer: t("liveSurgery.faq.items.1.a"),
    },
    {
      id: "faq-3",
      question: t("liveSurgery.faq.items.2.q"),
      answer: t("liveSurgery.faq.items.2.a"),
    },
    {
      id: "faq-4",
      question: t("liveSurgery.faq.items.3.q"),
      answer: t("liveSurgery.faq.items.3.a"),
    },
    {
      id: "faq-5",
      question: t("liveSurgery.faq.items.4.q"),
      answer: t("liveSurgery.faq.items.4.a"),
    },
    {
      id: "faq-6",
      question: t("liveSurgery.faq.items.5.q"),
      answer: t("liveSurgery.faq.items.5.a"),
    },
  ];
  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {resolvedHeading}
        </h1>
        <Accordion type="single" collapsible>
          {resolvedItems.map((item, index) => (
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

export { Faq1 };
