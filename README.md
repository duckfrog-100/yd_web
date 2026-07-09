# Yeongdeok Scent Archive

영덕 컬렉션 향기 기념품을 위한 모바일 전용 QR 웹페이지입니다.  
앱 설치 없이 QR 스캔으로 접속하며, 각 향마다 `Scent Play`, `Local Map`, `Re-Order` 탭을 제공합니다.

## 주요 기능

- 모바일 퍼스트 싱글 페이지 구조
- 향기별 자동 콘텐츠 전환
- Scent Play: 내러티브, 비주얼 룩북, 로컬 사운드 ASMR 콘셉트
- Local Map: 추천 동선, 소상공인 큐레이션, 디지털 바우처
- Re-Order: 재구매, 계절 구독, 리필 키트 CTA
- 향기 기록 카드 생성 기능

## 향기별 접속 URL

정적 호스팅 기준으로 아래처럼 QR을 만들면 됩니다.

```text
/?scent=01  강구항의 아침
/?scent=02  블루로드 산책
/?scent=03  복숭아밭의 오후
/?scent=04  오십천의 바람
/?scent=05  괴시리 고택의 밤
```

## 파일 구조

```text
index.html   웹페이지 마크업
styles.css   모바일 편집숍 톤 스타일
app.js       5종 향 데이터 및 인터랙션
```

## 배포

GitHub Pages, Vercel, Netlify 등 정적 웹 호스팅에 바로 배포할 수 있습니다.
