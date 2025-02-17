"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>news Article #{articleId}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      {/* Language switcher */}
      <div>
        <Link
          href={`/articles/${articleId}?lang=en`}
          style={{ paddingRight: "1rem" }}
        >
          English
        </Link>
        <Link
          href={`/articles/${articleId}?lang=es`}
          style={{ paddingRight: "1rem" }}
        >
          Español
        </Link>
        <Link
          href={`/articles/${articleId}?lang=fr`}
          style={{ paddingRight: "1rem" }}
        >
          Français
        </Link>
      </div>
    </div>
  );
}
