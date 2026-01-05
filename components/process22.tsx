import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const Process22 = () => {
  const process = [
    {
      step: "01",
      title: "Présentation du cas prothétique",
      description:
        "Objectif esthétique et fonctionnel, Choix du matériau, Lecture clinique du cas",
    },
    {
      step: "02",
      title: "Démonstration technique",
      description:
        "Présentation de la technique prothétique, Séquence de travail expliquée étape par étape, Astuces professionnelles",
    },
    {
      step: "03",
      title: "Pratique Workshop",
      description:
        "Réalisation par les participants, Application directe des techniques, Corrections individualisées",
          },
        {
      step: "04",
      title: "Finition & évaluation",
      description:
        "Analyse du résultat final,Optimisation esthétique,Conseils d’intégration clinique ou labo",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit">Processus Prothétique</h1>
              <Asterisk className="absolute -right-2 -top-2 size-5 text-red-500 md:size-10 lg:-right-14" />
            </div>
            <p className="text-foreground/50 text-base">
              Les Workshops Labo sont des formations 100 % prothétiques, orientées sur la précision, l’esthétique et la maîtrise du matériau.Chaque participant travaille sur son propre poste, avec un suivi continu.
            </p>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-red-500" />
              Get in touch
            </Button>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Process22 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
