export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. partial 타입
type aaa = Partial<IProfile>;

// 2. required 타입
type bbb = Required<IProfile>;

// 3. pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "철수"; // 철수 영희  훈이만 됨
let child2: string = "은찬"; // 아무거나 다 됨

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의 key들로 union 타입 만들기
type ggg = keyof IProfile; // "name"|"age"|"school"|"hobby"
let myProfile: ggg = "hobby";

// 7. type vs interface 차이   =>   interface는 선언병합 가능
export interface IProfile {
  candy: number; // 선언병합으로 추가 됨
}
// 8. 타입 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
