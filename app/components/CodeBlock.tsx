"use client";

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'typescript',
    className
}) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className={cn(
            "relative group rounded-lg overflow-hidden bg-gray-900/75 my-4",
            className
        )}>
            <div className="absolute right-2 top-2">
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                    )}
                </button>
            </div>
            <Highlight
                theme={themes.nightOwl}
                code={code.trim()}
                language={language}
            >
                {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={cn(
                            "p-4 overflow-x-auto",
                            highlightClassName
                        )}
                        style={style}
                    >
                        {tokens.map((line, i) => (
                            <div
                                key={i}
                                {...getLineProps({ line })}
                                className={cn(
                                    "transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:bg-gray-800/50 px-4 -mx-4",
                                    "border-l-2 border-transparent hover:border-green-500",
                                    "cursor-pointer"
                                )}
                            >
                                <span className="select-none opacity-50 mr-4 text-sm">
                                    {(i + 1).toString().padStart(2, '0')}
                                </span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}; 