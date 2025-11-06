import { LiveSurgerySession, liveSurgerySessions } from '@/lib/liveSurgery';
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

interface LiveSurgeryCardGridProps {
  session: LiveSurgerySession;
}

function LiveSurgeryCardGrid({ session }: LiveSurgeryCardGridProps): JSX.Element {
  const complexityColors: Record<string, string> = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700',
  };
  const complexity = session.complexity || 'Beginner';

  return (
    <Link href={`/live-surgery/${session.id}`}>
      <div className="group bg-white overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl">
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={session.imageUrl}
            alt={session.title}
            width={400}
            height={300}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${complexityColors[complexity]}`}>
              {complexity}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center">
            <Award className="mr-1.5 h-4 w-4" />
            {session.category}
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-1">{session.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{session.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function LiveSurgeryPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Live Surgery Sessions</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Explore our upcoming live surgery sessions and enhance your skills with expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveSurgerySessions.map((session) => (
              <LiveSurgeryCardGrid key={session.id} session={session} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}