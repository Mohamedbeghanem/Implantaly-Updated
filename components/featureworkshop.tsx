import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  Video,
  Hand,
  TrendingUp,
  SquareKanban,
  Sparkles,
  Workflow,
  Pen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Featureworkshop = ({
  title = "Why Choose our Workshop?",
  features = [
    {
      heading: "Hands-on encadré",
      description:
        "Pratique réelle avec supervision experte et corrections immédiates.",
      icon: <Hand className="size-6" />,
    },
    {
      heading: "Workflows maîtrisés",
      description:
        "Protocoles clairs, structurés et directement applicables.",
      icon: <Pen className="size-6" />,
    },
    {
      heading: "Formations spécialisées",
      description:
        "Parcours distincts en chirurgie et en labo-prothèse.",
      icon: <Layers className="size-6" />,
    },
  ],
}: Feature43Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
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

export { Featureworkshop };
