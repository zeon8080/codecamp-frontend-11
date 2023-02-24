["철수", "영희", "훈이", "맹구"].forEach((_, index) => {
  console.log(`영희는 ${index}번째 칸에 들어있습니다.`);
});

["철수", "영희", "훈이", "맹구"].forEach((el, index) => {
  if (el === "영희") {
    console.log(`영희는 ${index + 1}번째 칸에 들어있습니다.`);
  }
});
