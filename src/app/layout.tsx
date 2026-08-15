import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"TRIVIAN AX Diagnosis | 기업 AX 성숙도 진단",description:"24개의 질문으로 기업의 AI Transformation 성숙도를 진단하고, 핵심 병목과 90일 실행과제, 12개월 AX Roadmap을 확인하세요.",openGraph:{title:"TRIVIAN AX Diagnosis",description:"기업 AX 성숙도 진단과 실행 로드맵",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
