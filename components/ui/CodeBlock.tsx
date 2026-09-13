'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback if any
    }
  };

  return (
    <div className={cn('relative group', className)}>
      <div className="bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-100 dark:border-neutral-700 rounded-xl p-4 font-mono text-xs text-black dark:text-white overflow-x-auto">
        <pre className="whitespace-pre pr-14">{code}</pre>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied to clipboard' : 'Copy code to clipboard'}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600 text-[11px] font-sans font-medium shadow-2xs backdrop-blur-xs transition-all cursor-pointer opacity-80 group-hover:opacity-100"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-500" />
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span className="text-[10px]">Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
