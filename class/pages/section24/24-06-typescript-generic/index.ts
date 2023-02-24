// 1. 문자, 숫자, 붏린 primitive 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);
//
//
// 2. any 타입 => js랑 다를바 없음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result = getAny(123, true, "철수");
//
//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result = getUnknown("철수", 123, true);
//
//
// 4. generic => any랑 같은 것 같지만 타입을 알 수 있고 안전하다.
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric<string, string, number>("철수", 123, true);
// getGeneric<MyType1,MyType2,MyType3> <= getGeneric<string,string,number>

// const [count, setCount] = useState<number>(0) 이랑 비슷하게 생겼네..

//
//
// 4. generic => any랑 같은 것 같지만 타입을 알 수 있고 안전하다.
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result = getGeneric2<string, string, number>("철수", 123, true);
//
//
// 4. generic => any랑 같은 것 같지만 타입을 알 수 있고 안전하다.
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result = getGeneric3<string, string, number>("철수", 123, true);
//
//
// 4. generic => any랑 같은 것 같지만 타입을 알 수 있고 안전하다.
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result = getGeneric4<string, string, number>("철수", 123, true);
