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

const Feature43 = ({
  title = "Why Choose Alta Academy?",
  features = [
    {
      heading: "Excellence in Live Surgery",
      description:
        "Real-time surgical training led by nationally and internationally recognized experts.",
      icon: <Video className="size-6" />,
    },
    {
      heading: "Mastery Through Hands-On Practice",
      description:
        "Intensive hands-on sessions with protocols you can apply immediately in your clinic.",
      icon: <Hand className="size-6" />,
    },
    {
      heading: "Results-Driven Education",
      description:
        "Courses designed to upgrade your skills, secure your procedures, and accelerate your clinical performance.",
      icon: <TrendingUp className="size-6" />,
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
