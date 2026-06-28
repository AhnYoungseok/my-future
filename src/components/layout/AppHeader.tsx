import Link from "next/link";

const nav = [
  ["/diagnosis", "진로진단"],
  ["/majors", "학과맵"],
  ["/universities", "대학맵"],
  ["/jobs", "직업맵"],
  ["/companies", "기업맵"],
  ["/compare", "비교실"],
  ["/portfolio", "포트폴리오"],
  ["/report", "리포트"]
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-black text-navy">
          진로맵 <span className="text-slateblue">Career Compass Pro</span>
        </Link>
        <nav className="flex gap-2 overflow-x-auto pb-1 text-sm font-semibold text-slate-600 md:flex-wrap md:justify-end">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className="whitespace-nowrap rounded-full px-3 py-2 hover:bg-slate-100 hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
