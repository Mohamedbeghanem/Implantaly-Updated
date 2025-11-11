import Image from "next/image";

const LiveSteps = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              How it works?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Clarity gives you the blocks & components you need to create a
              truly professional website.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.jpg" // Replace with a relevant image
              alt="People working in an office"
              width={600}
              height={400}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
              01
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Start with a great design
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Clarity gives you the blocks & components you need to create a
              website.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
              02
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Add clever content areas
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Clarity gives you the blocks & components you need to create a
              website.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
              03
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Easily update your site
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Clarity gives you the blocks & components you need to create a
              website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSteps;
