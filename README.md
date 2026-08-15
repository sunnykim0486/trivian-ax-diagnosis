# TRIVIAN AX Diagnosis

24문항으로 기업 AX 성숙도를 진단하고 6축 점수, 조직 패턴, 핵심 병목, Quick Win, 90일 계획과 12개월 로드맵을 제공하는 MVP입니다.

## 실행
`pnpm install` → `pnpm test` → `pnpm build`

## Vercel 환경변수
- `ADMIN_EMAIL`: 리포트 신청을 받을 비공개 관리자 이메일
- `RESEND_API_KEY`: Resend 서버 API 키. 없으면 서버 로그 mock fallback으로 작동
- `REPORT_FROM_EMAIL`: Resend에서 인증한 발신 도메인의 주소
- `SUPABASE_URL`: 고객 신청 데이터를 저장할 Supabase 프로젝트 URL
- `SUPABASE_SERVICE_ROLE_KEY`: 서버 전용 Supabase 키. 브라우저 번들에 노출하지 않음

현재 MVP는 Supabase가 필요하지 않습니다. 진행 상태는 `localStorage`에 임시 저장됩니다. 운영 전 실제 이메일 provider, 개인정보처리방침·보유기간·수신거부 문구를 확정하세요.
