export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";
  aaa = 3;

  //타입 명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  //타입 명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  //숫자 타입
  let ddd: number = 10;
  ddd = "철수";

  //불린 타입
  let eee: boolean = true;
  eee = false;
  eee = "false"; // true로 작동

  //배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕"];

  let ggg: string[] = ["철수", "영희", "훈이", 10];

  let hhh: any[] = ["철수", "훈이", 10];

  let hhh2: (string | number)[] = ["철수", "훈이", 10];

  //객체 타입

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  profile.name = "훈이"; //타입추론으로 이것만 가능
  profile.age = "8살";
  profile.hobby = "수영";

  //함수 타입

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
    const result2 = add2(1000, 2000, "원");

    // any 타입

    let qqq: any = "철수";
    qqq = 123;
    qqq = true;
  };

  return <></>;
}
