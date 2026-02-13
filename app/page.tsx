// app/page.tsx
import { SearchForm } from "./components/search-form";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Reddit Complaint Miner
      </h1>
      <p className="mb-8 text-gray-600">
        Search subreddits for complaints and pain points to validate SaaS ideas.
      </p>
      <SearchForm />
    </main>
  );
}
