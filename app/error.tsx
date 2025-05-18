'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import LetterGlitch from '@/components/ui/letter-glitch';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
            <div className="h-24 w-48">
                <LetterGlitch
                    glitchColors={["#dc2626", "#ffffff", "#991b1b"]}
                    glitchSpeed={100}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-300">Something went wrong!</h2>
            <p className="text-zinc-400 max-w-md">
                An unexpected error has occurred. We've been notified and are working on it.
            </p>
            <div className="flex space-x-4">
                <button
                    onClick={reset}
                    className="px-6 py-2 text-zinc-200 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors duration-200"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="px-6 py-2 text-zinc-200 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors duration-200"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
} 