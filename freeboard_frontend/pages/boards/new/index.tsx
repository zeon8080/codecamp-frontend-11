import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardWritePage() {
  // 위쪽은 자바스크립트 작성하는 공간

  return (
    //아래쪽은 html 작성하는 공간
    <div>
      <BoardWrite isEdit={false} />
    </div>
  );
}
