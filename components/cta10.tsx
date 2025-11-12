import { Button } from "@/components/ui/button";

interface Cta10Props {
  heading: string;
  description: string;
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
}

const Cta10 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Cta10Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-green-900 text-white flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-gray-300 max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-900" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild className="bg-white text-green-900 hover:bg-gray-200" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta10 };
