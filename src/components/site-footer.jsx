export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-4 text-sm text-slate-500 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{year} Built as a creative placeholder portfolio in Next.js 16.</p>
        <p>Replace the data in one place, and the whole site updates with it.</p>
      </div>
    </footer>
  );
}
