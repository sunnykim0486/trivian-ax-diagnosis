import { DimensionKey, CompanyProfile, Answers } from "@/types/diagnosis";
export const dimensions:{key:DimensionKey;label:string;short:string}[]=[{key:"strategy",label:"전략·리더십",short:"전략"},{key:"data",label:"데이터·인프라",short:"데이터"},{key:"people",label:"인재·역량",short:"인재"},{key:"governance",label:"프로세스·거버넌스",short:"거버넌스"},{key:"technology",label:"기술·도구",short:"기술"},{key:"culture",label:"문화·변화관리",short:"문화"}];
const qs:Record<DimensionKey,string[]>={
strategy:["AI·AX를 경영전략의 일부로 명확히 정의하고 있다.","CEO 또는 주요 경영진이 AX 추진 의사결정에 참여한다.","향후 1~3년 AX 우선순위와 로드맵이 정의되어 있다.","AX 책임자·예산·성과지표가 명확하다."],
data:["주요 업무 데이터가 조직 차원에서 체계적으로 관리된다.","필요한 데이터를 부서 간에 쉽게 검색하고 활용할 수 있다.","ERP·MES·CRM 등 주요 시스템 데이터가 필요한 수준으로 연결된다.","데이터 품질·접근권한·보안 기준이 마련되어 있다."],
people:["임직원이 생성형 AI를 실제 업무에 활용한다.","직무별 AI·데이터 교육이 체계적으로 제공된다.","내부에 AI·데이터·AX 프로젝트를 리딩할 사람이 있다.","내부에 AI 활용 경험과 노하우가 축적된다."],
governance:["주요 업무 프로세스가 표준화되어 있다.","AI 업무를 선정하고 PoC에서 운영으로 전환하는 절차가 있다.","AI 사용 가이드나 내부 정책이 마련되어 있다.","개인정보·보안·저작권·AI 오류 위험을 관리한다."],
technology:["생성형 AI를 실제 업무에 활용한다.","반복 업무 일부가 AI 또는 자동화 기술로 자동화되었다.","AI가 사내 시스템이나 업무도구와 연결된다.","AI PoC가 실제 운영 업무로 전환된다."],
culture:["구성원이 AI를 업무 개선의 기회로 받아들인다.","새 AI 활용법을 실험하고 실패 경험을 공유할 수 있다.","경영진과 구성원이 데이터와 AI 분석 결과를 의사결정에 활용한다.","AI 성공사례와 노하우가 조직에 공유·확산된다."]};
export const questions=dimensions.flatMap((d,di)=>qs[d.key].map((text,i)=>({id:`${["S","D","P","G","T","C"][di]}${i+1}`,dimension:d.key,text})));
export const options={industry:["제조","첨단소재","IT·Software","전문서비스","유통·물류","공공·기관","기타"],companySize:["10인 미만","10~49","50~299","300~999","1,000인 이상"],companyAge:["1년 미만","1~3년","3~7년","7년 이상"],systems:["ERP","MES","CRM","Groupware","Slack·Teams","Notion","기타","특별히 없음"],aiTools:["ChatGPT","Claude","Gemini","Microsoft Copilot","사내 AI","기타","미사용"],primaryGoal:["비용절감","업무자동화","생산성 향상","R&D 혁신","품질 개선","영업·마케팅","데이터 분석","경영 의사결정","신사업 개발"],perceivedBarrier:["AX 전략 부족","데이터 부족","전문 인력 부족","기술 부족","예산 부족","보안·규제","조직문화·변화 저항","무엇부터 해야 할지 모름"]};
export const sampleProfile:CompanyProfile={companyName:"TRIVIAN Sample Manufacturing",industry:"첨단소재",companySize:"50~299",companyAge:"7년 이상",systems:["ERP","MES","Groupware"],aiTools:["ChatGPT"],primaryGoal:"생산성 향상",perceivedBarrier:"데이터 부족"};
export const sampleAnswers:Answers=Object.fromEntries(questions.map((q,i)=>[q.id,[4,4,3,3,2,2,2,2,3,2,2,2,3,2,2,2,4,3,2,2,3,3,2,2][i]]));
