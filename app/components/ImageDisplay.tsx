"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ImageDisplayProps {
    children: React.ReactNode;
    className?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
    children,
    className
}) => {
    return (
        <div className={cn(
            "relative w-full overflow-hidden rounded-lg my-6 border border-gray-700 bg-gray-900/50 shadow-xl",
            className
        )}>
            <div className="flex justify-center">
                {children}
            </div>
        </div>
    );
};

export default ImageDisplay; 