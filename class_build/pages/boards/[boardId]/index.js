import { useRouter } from "next/router";

export default function BoardsMovedPage() {
  const router = useRouter();
  return (
    <>
      <div>ㅎㅇ 게시판 상세 동적페이지입니다.</div>
      <div>게시글 아이디: {router.query.boardId}</div>
    </>
  );
}
