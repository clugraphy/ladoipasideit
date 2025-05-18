import Link from 'next/link';
import LetterGlitch from '@/components/ui/letter-glitch';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
            <div className="h-24 w-48">
                <LetterGlitch
                    glitchColors={["#ff3333", "#ffffff", "#2563eb"]}
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={true}
                    smooth={true}
                />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-300">Page Not Found</h2>
            <p className="text-zinc-400 max-w-md">
                The page you're looking for doesn't exist or has been moved to another URL.
            </p>
            <Link
                href="/"
                className="mt-4 px-6 py-2 text-zinc-200 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors duration-200"
            >
                Return Home
            </Link>
        </div>
    );
} 