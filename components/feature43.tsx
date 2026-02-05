"use client";

import { HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { useTranslations } from "@/hooks/use-translations";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const Feature43 = ({
  title,
  features,
}: Feature43Props) => {
  const { t } = useTranslations();
  const resolvedTitle = title ?? t("home.whyChoose.title");
  const resolvedFeatures = features ?? [
    {
      heading: t("home.whyChoose.items.0.title"),
      description: t("home.whyChoose.items.0.description"),
      icon: <HeartPulse className="size-6" />,
    },
    {
      heading: t("home.whyChoose.items.1.title"),
      description: t("home.whyChoose.items.1.description"),
      icon: <ShieldCheck className="size-6" />,
    },
    {
      heading: t("home.whyChoose.items.2.title"),
      description: t("home.whyChoose.items.2.description"),
      icon: <Sparkles className="size-6" />,
    },
  ];
  return (
    <section className="py-32">
      <div className="container">
        {resolvedTitle && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {resolvedTitle}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {resolvedFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
