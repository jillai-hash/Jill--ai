import { Mail, Newspaper, Sparkles } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <div className="bg-gradient-to-r from-amber-100 to-stone-100 border border-amber-300 rounded-2xl p-6 text-center shadow-md mt-8">
      <div className="flex flex-col items-center gap-3">
        <Sparkles size={28} className="text-amber-600" />
        <h2 className="text-xl font-bold text-stone-800">Stay in the Loop with Jill AI ✨</h2>
        <p className="text-sm text-gray-700 max-w-md">
          Subscribe to <strong>The Jill Report</strong> for crypto insights, AI updates, and project drops. We send pure signal – no spam.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href="https://medium.com/@TheJillReport"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition"
          >
            <Newspaper size={18} /> Read & Subscribe
          </a>

          <a
            href="mailto:you@domain.com"
            className="inline-flex items-center gap-2 px-5 py-3 border border-stone-300 rounded-xl text-stone-800 bg-white hover:bg-stone-100 transition"
          >
            <Mail size={18} /> Contact Jill AI
          </a>
        </div>
      </div>
    </div>
  );
}
