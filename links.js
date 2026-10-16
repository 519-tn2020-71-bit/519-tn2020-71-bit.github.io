/* 모음 페이지에 실리는 목록. 새로 배포하면 여기에 한 덩어리를 더하고 올리면 된다(위에 있을수록 먼저 나온다).
   kind: "game"(수업용 게임) 또는 "tool"(수업 도구)   img: 표지 그림 주소(없으면 빼도 됨)   date: 처음 배포한 달 */
const LINKS=[
  {kind:"game",title:"피리 소리, 바다 건너",work:"고전 소설 「최척전」",desc:"전쟁이 흩어 놓은 가족이 지도 위를 건너 다시 모이기까지. 최척 편 6장, 옥영 편 6장.",url:"https://519-tn2020-71-bit.github.io/choicheok/",img:"https://519-tn2020-71-bit.github.io/choicheok/art/cover.jpg",date:"2026-10"},
  {kind:"game",title:"연광정의 북소리",work:"고전 소설 「옥단춘전」",desc:"저버린 약속과 지킨 믿음. 이혈룡 편 6장, 옥단춘 편 4장.",url:"https://519-tn2020-71-bit.github.io/okdanchun/",img:"https://519-tn2020-71-bit.github.io/okdanchun/art/cover.jpg",date:"2026-10"},
  {kind:"game",title:"스물여덟 자의 비밀",work:"한글날 · 훈민정음",desc:"집현전 막내 학사가 되어, 훈민정음이 태어나는 순간을 지켜봅니다.",url:"https://519-tn2020-71-bit.github.io/hangeul/",img:"https://519-tn2020-71-bit.github.io/hangeul/art/cover.jpg",date:"2026-10"},
  {kind:"game",title:"풍운의 증표",work:"고전 소설 「장풍운전」",desc:"흩어진 가족이 증표로 다시 모이기까지. 장풍운 편 6장, 이경패 편 4장.",url:"https://519-tn2020-71-bit.github.io/jangpungun/",img:"https://519-tn2020-71-bit.github.io/jangpungun/art/cover.jpg",date:"2026-10"},
  {kind:"game",title:"굴러라, 금방울",work:"고전 소설 「금방울전」",desc:"전생의 인연을 되찾기까지, 금방울과 해룡의 이야기.",url:"https://519-tn2020-71-bit.github.io/geumbanguljeon/",img:"https://519-tn2020-71-bit.github.io/geumbanguljeon/art/cover.jpg",date:"2026-09"},
  {kind:"game",title:"비장이 된 아내",work:"고전 소설 「이춘풍전」",desc:"방탕한 남편을 구하러, 아내는 남장을 하고 평양으로 갑니다.",url:"https://519-tn2020-71-bit.github.io/leechunpung/",img:"https://519-tn2020-71-bit.github.io/leechunpung/art/cover.jpg",date:"2026-09"},
  {kind:"tool",title:"오늘의 우리 조 에이스는?",work:"동료 평가",desc:"모둠 활동 뒤에 쓰는 동료 평가 앱.",url:"https://519-tn2020-71-bit.github.io/ace-app/",date:"2026-05"},
  {kind:"tool",title:"통합 성적·등급 계산기",work:"성적 처리",desc:"등급 컷과 성적을 한 번에 계산합니다.",url:"https://519-tn2020-71-bit.github.io/grade-analysis/",date:"2026-05"}
];
