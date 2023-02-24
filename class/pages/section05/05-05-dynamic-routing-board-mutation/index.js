import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시히하고, catch에 있는 내용이 실행됨.
      const result = await 나의함수({
        variables: {
          // variables === $
          writer: "제온",
          title: "집에",
          contents: "갈래",
        },
      });
      console.log(result);
      // router.push(
      // "/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert("error.message");
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>; //한줄은 괄호 필요 없음
}
