export function ExternalLinkButton({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) {
    return <span className="inline-flex min-h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-500">공식 사이트에서 확인 필요</span>;
  }
  return (
    <a className="inline-flex min-h-10 items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-navy shadow-sm transition hover:border-slateblue hover:text-slateblue" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
