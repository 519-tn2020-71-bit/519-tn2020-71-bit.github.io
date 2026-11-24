/* 첫 화면(index.html)과 QR 한눈에 보기(qr.html)가 함께 쓰는 목록.
   새로 배포하면 LINKS에 한 덩어리를 더하고 올리면 된다(같은 묶음 안에서는 위에 있을수록 먼저 나온다).
   group: GROUPS의 id   color: 색 표지(없으면 묶음 색)   work: 표지 위 작은 글씨   img: 표지 그림 주소(없으면 묶음 색 표지)   date: 처음 배포한 달
   soon: true면 아직 열리지 않은 주소(카드에 '준비 중'이 붙고 QR에는 안 나옴) */
const GROUPS=[
  {id:"rpg",title:"고전 소설 RPG 게임",note:"작품을 걸으며 끝까지 읽는 수업용 게임",color:"blue"},
  {id:"event",title:"학교 행사",note:"AI·디지털로 함께한 행사",color:"violet"},
  {id:"class",title:"수업 도구와 자료",note:"수업과 연수에서 쓴 것",color:"green"}
];
const LINKS=[
  {group:"rpg",title:"젖은 발자국",work:"「장화홍련전」의 짜임을 빌린 괴담 추리",desc:"새로 부임한 현감이 되어 증언의 모순을 찌르고 말의 속뜻을 듣는 추리 게임. 화법·독서(추론하며 듣기) 4차시용, AI 자유 심문 포함.",url:"https://519-tn2020-71-bit.github.io/janghwa/",img:"https://519-tn2020-71-bit.github.io/janghwa/art/cover.jpg",date:"2026-10"},
  {group:"rpg",title:"피리 소리, 바다 건너",work:"고전 소설 「최척전」",desc:"전쟁이 흩어 놓은 가족이 지도 위를 건너 다시 모이기까지. 최척 편 6장, 옥영 편 6장.",url:"https://519-tn2020-71-bit.github.io/choicheok/",img:"https://519-tn2020-71-bit.github.io/choicheok/art/cover.jpg",date:"2026-10"},
  {group:"rpg",title:"연광정의 북소리",work:"고전 소설 「옥단춘전」",desc:"저버린 약속과 지킨 믿음. 이혈룡 편 6장, 옥단춘 편 4장.",url:"https://519-tn2020-71-bit.github.io/okdanchun/",img:"https://519-tn2020-71-bit.github.io/okdanchun/art/cover.jpg",date:"2026-10"},
  {group:"rpg",title:"풍운의 증표",work:"고전 소설 「장풍운전」",desc:"흩어진 가족이 증표로 다시 모이기까지. 장풍운 편 6장, 이경패 편 4장.",url:"https://519-tn2020-71-bit.github.io/jangpungun/",img:"https://519-tn2020-71-bit.github.io/jangpungun/art/cover.jpg",date:"2026-10"},
  {group:"rpg",title:"굴러라, 금방울",work:"고전 소설 「금방울전」",desc:"전생의 인연을 되찾기까지, 금방울과 해룡의 이야기.",url:"https://519-tn2020-71-bit.github.io/geumbanguljeon/",img:"https://519-tn2020-71-bit.github.io/geumbanguljeon/art/cover.jpg",date:"2026-09"},
  {group:"rpg",title:"비장이 된 아내",work:"고전 소설 「이춘풍전」",desc:"방탕한 남편을 구하러, 아내는 남장을 하고 평양으로 갑니다.",url:"https://519-tn2020-71-bit.github.io/leechunpung/",img:"https://519-tn2020-71-bit.github.io/leechunpung/art/cover.jpg",date:"2026-09"},

  {group:"event",title:"진짜를 가려라",work:"AI 판별 9일 챌린지 · 체험판",desc:"AI 글·사진·영상을 가려내는 9일 학급 대항 챌린지를 누구나 해 볼 수 있게 만든 체험판이에요. 기록은 보는 사람의 브라우저에만 남아 실제 행사와 섞이지 않아요. 왼쪽 아래 [체험판] 단추로 날짜를 옮길 수 있어요.",test:["학생: 학번 1101 · PIN 0000","담임: teacher1-1 · PIN 000000 (/teacher)","관리 교사: 비밀번호 demo (/teacher)"],url:"https://ai-check-demo.jihan10.workers.dev/",date:"2026-11"},
  {group:"event",title:"스물여덟 자의 비밀",work:"한글날 행사",desc:"집현전 막내 학사가 되어, 훈민정음이 태어나는 순간을 지켜봅니다.",url:"https://519-tn2020-71-bit.github.io/hangeul/",img:"https://519-tn2020-71-bit.github.io/hangeul/art/cover.jpg",date:"2026-10"},
  {group:"event",color:"pink",title:"사회 문제 알리는 영상전",work:"영상 전시",desc:"사회 문제를 알리는 영상을 모아 보는 전시관.",url:"https://files-mentioned-by-the-user-codex-blond.vercel.app/",date:"2026-11"},
  {group:"event",color:"amber",title:"종이에서 튀어나와!",work:"축제 부스 예시 작품",desc:"축제 부스에서 보여 준 예시 작품이에요. 종이에 그린 그림을 휴대폰으로 찍으면 날아다니며 쏘는 게임의 주인공·총알·적이 됩니다.",url:"https://paper-pop-game.jihan10.workers.dev/",date:"2026-11"},

  {group:"class",title:"우리 품사 분리수거",work:"문법 수업 · 품사",desc:"낱말을 품사별로 분리수거하며 품사를 익히는 모둠 활동 앱.",url:"https://pos-sorting-app-1775129269.web.app/",
   test:["교사: 아이디 teacher1 · 비밀번호 1234","학생: 코드 NH4XM · 모둠명 1모둠"],date:"2026-11"},
  {group:"class",color:"teal",title:"뉴스레터",work:"뉴스레터",desc:"뉴스레터를 읽을 수 있는 페이지.",url:"https://script.google.com/macros/s/AKfycbwn8-nPNz1UzuCzcu9MrwgIUgd1F_WbyRVvoBWCnFbg1zuyOkBV8lId5U5d3FAXm6KtDQ/exec",date:"2026-11"},
  {group:"class",color:"blue",title:"AI 연수 자료 모음",work:"교사 연수",desc:"2026년에 함께 들은 AI 연수 14개의 자료와 참고 링크. 주제로 거르거나 찾아볼 수 있어요.",url:"https://519-tn2020-71-bit.github.io/yeonsu/",date:"2026-11"}
];
