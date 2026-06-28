import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";

export const metadata: Metadata = {
  title: "진로맵 Career Compass Pro",
  description: "고등학생의 대학, 학과, 직업, 기업, 연봉, 생활수준, 리스크를 연결하는 진로 설계 플랫폼"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
