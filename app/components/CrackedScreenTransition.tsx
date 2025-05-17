'use client';

import React, { useEffect, useState } from 'react';

interface TvNoiseTransitionProps {
    children: React.ReactNode;
}

export function TvNoiseTransition({ children }: TvNoiseTransitionProps) {
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleNavigation = () => {
            setIsTransitioning(true);
            setTimeout(() => setIsTransitioning(false), 800); // Shorter duration for snappier effect
        };

        window.addEventListener('navigationstart', handleNavigation);
        return () => window.removeEventListener('navigationstart', handleNavigation);
    }, []);

    return (
        <div className="relative">
            {children}
            {isTransitioning && (
                <div className="tv-noise-overlay fixed inset-0 pointer-events-none z-50">
                    <div className="tv-noise"></div>
                    <div className="tv-lines"></div>
                    <div className="tv-glitch"></div>
                </div>
            )}
        </div>
    );
} 