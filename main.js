const todayLunch = [
  "검은소라게 술찜",
  "복개구리 만두",
  "정글식 마라샹궈",
  "영양 만점 암흑스프",
  "헌터피쉬초밥",
  "푸른양꼬치",
  "슬라임 푸딩",
];
console.log(todayLunch[0]);
// 바지락 술찜

console.log(todayLunch[6]);
// 신라면
const myProfile = {
  이름: "기무요온사",
  나이: 47,
  직업: "용사",
  좋아하는것: "돈,미소녀",
  특수기술1: "스켈레톤정도의 근력.!",
  특수기술2: "고블린정도의 지능!",
  특수기술3: "팬티 자동세척기능!!!(언제 어디서든 뽀송하게!)",
  특수기술4: "정신승리.!(당신은 항상 승리합니다)",
};
console.log(myProfile.name);
// 00S0
console.log(myProfile.job);
// 크리에이터
function getMyProfile(key) {
  let htmlElement = document.querySelector(".aboutMe");

  htmlElement.innerHTML = myProfile[key];
}

function choiceTodayLunch() {
  let htmlElement = document.querySelector(".todayLunch");

  htmlElement.innerHTML =
    todayLunch[Math.floor(Math.random() * todayLunch.length)];
}
function revealMyInfo(myName, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myName;
  htmlElement.style.color = color;

  htmlElement.style.animationDuration = "1s";

  if (animationName === "bgFadeOut") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationName = animationName;
  }
}
