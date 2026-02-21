"use client";
import Card from "@/components/shared/Card/Cart";
import { useEffect, useState } from "react";

type News = {
  id: number;
  title: string;
  content: string;
};

export default function Blog() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Welcome to My Blog
      </h1>
      {news.map((el, idx) => (
        <Card key={idx} Title={el.title} body={el.content} />
      ))}
    </main>
  );
}
