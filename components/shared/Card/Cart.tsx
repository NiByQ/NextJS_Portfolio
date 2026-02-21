import { useState } from "react";

export default function Card({ Title, body }: { Title: string; body: string }) {
  return (
    <div className="flex items-center justify-center bg-zinc-50 p-6 dark:bg-zinc-950">
      <main className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {Title}
        </h1>
        <p className="mt-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
          {body}
        </p>
        <div className="mt-8">
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            Dowiedz się więcej <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </main>
    </div>
  );
}
