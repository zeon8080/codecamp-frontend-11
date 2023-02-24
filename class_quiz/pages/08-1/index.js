export default function MapClassmates() {
  const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
  ];

  let value = classmates.filter((value) => value.school === "토끼초등학교");

  value.map((el) => ({
    name: el.name,
    age: el.age,
    school: "토끼초등학교",
    candy: 10,
  }));
}
