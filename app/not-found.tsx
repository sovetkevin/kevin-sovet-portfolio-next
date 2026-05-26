import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#eef7f7] flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-gray-900 tracking-tighter">404</h1>
      <p className="text-xl text-gray-600">This page doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}