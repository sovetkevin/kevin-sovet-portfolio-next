import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className="min-h-screen bg-[#eef7f7] dark:bg-[#0f1117] flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-50 tracking-tighter">{t('title')}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">{t('description')}</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-white transition-all"
      >
        {t('backToPortfolio')}
      </Link>
    </div>
  );
}
