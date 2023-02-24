import CommentsLists from "../../../src/components/units/boardComments/CommentsLists/CommentsLists.container";
import CommentsWrite from "../../../src/components/units/boardComments/CommentsWrite/CommentsWrite.container";
import BoardMoved from "../../../src/components/units/board/detail/BoardMoved.container";

export default function BoardMovedPage() {
  return (
    <>
      <BoardMoved />
      <CommentsWrite />
      <CommentsLists />
    </>
  );
}
