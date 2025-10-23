import BlogList from "@/components/blog/BlogList";
import Header from "@/components/layout/Header";

/**
 * Home Page Component - Main landing page
 * Features:
 * - Header with hero section
 * - Blog list with category filtering
 * - Semantic HTML structure
 * - Accessible landmarks
 */

export default function Home() {
  return (
    <>
      <Header />
      <main role="main"> {/* Add main landmark */}
        <BlogList />
      </main>
    </>
  )
}