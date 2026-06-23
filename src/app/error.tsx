"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-4xl text-amber mb-4">SOMETHING WENT WRONG</h1>
        <p className="font-sans text-sm text-text-secondary mb-6">
          We hit an unexpected error. This has been logged and we&apos;ll look into it.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="bg-amber text-base font-sans text-xs uppercase tracking-[0.1em] font-bold px-6 py-3 hover:bg-amber-light transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-base-border text-text-secondary font-sans text-xs uppercase tracking-[0.1em] px-6 py-3 hover:border-amber/50 hover:text-amber transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
