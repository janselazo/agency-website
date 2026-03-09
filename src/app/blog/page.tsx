import type { Metadata } from "next";
import BlogHero from "./BlogHero";
import PostGrid from "./PostGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI engineering, startup building, growth methodology, and the craft of scalable software — from the Zenpho team.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <PostGrid />
    </>
  );
}
