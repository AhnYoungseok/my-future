import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-navy">자료를 찾을 수 없습니다</h1>
      <p className="mt-4 text-slate-600">요청한 항목이 mock data에 없거나 주소가 바뀌었습니다.</p>
      <Link className="mt-8 inline-flex rounded-md bg-navy px-5 py-3 font-bold text-white" href="/">홈으로 이동</Link>
    </main>
  );
}
