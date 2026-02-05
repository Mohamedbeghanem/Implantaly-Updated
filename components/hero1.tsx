"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

interface Hero1Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge,
  heading,
  description,
  buttons,
  image,
}: Hero1Props) => {
  const { t } = useTranslations();
  const resolvedBadge = badge ?? t("home.sections.implantSurgery.badge");
  const resolvedHeading = heading ?? t("home.sections.implantSurgery.heading");
  const resolvedDescription =
    description ?? t("home.sections.implantSurgery.description");
  const resolvedButtons = buttons ?? {
    primary: {
      text: t("home.sections.implantSurgery.ctaPrimary"),
      url: "/contact",
    },
    secondary: {
      text: t("home.sections.implantSurgery.ctaSecondary"),
      url: "/features",
    },
  };
  const resolvedImage = image ?? {
    src: "/live-Sutgery.jpeg",
    alt: t("home.sections.implantSurgery.imageAlt"),
  };
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {resolvedBadge && (
              <Badge variant="outline">
                {resolvedBadge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {resolvedHeading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {resolvedDescription}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {resolvedButtons?.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={resolvedButtons.primary.url}>
                    {resolvedButtons.primary.text}
                  </a>
                </Button>
              )}
              {resolvedButtons?.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={resolvedButtons.secondary.url}>
                    {resolvedButtons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={resolvedImage.src}
            alt={resolvedImage.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
