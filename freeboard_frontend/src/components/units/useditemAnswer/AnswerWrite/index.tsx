// import { useForm } from "react-hook-form";
// import { useClickAnswer } from "../../../commons/hooks/customs/useClickAnswer";
// import {
//   IQuery,
//   IQueryFetchUseditemQuestionsArgs,
// } from "../../../../commons/types/generated/types";
// import { gql, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useClickQuestionEdit } from "../../../commons/hooks/customs/useClickQuestionEdit";

// export const FETCH_QUESTIONS = gql`
//   query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
//     fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
//       _id
//       contents
//       createdAt
//       #   user {
//       #     picture
//       #     name
//       #   }
//     }
//   }
// `;
// export default function AnswerWrite() {
//   const router = useRouter();
//   const { register, handleSubmit } = useForm({
//     mode: "onChange",
//   });
//   const { onClickAnswer } = useClickAnswer();
//   const { myIndex } = useClickQuestionEdit();

//   const { data } = useQuery<
//     Pick<IQuery, "fetchUseditemQuestions">,
//     IQueryFetchUseditemQuestionsArgs
//   >(FETCH_QUESTIONS, {
//     variables: {
//       useditemId: String(router.query.useditemId),
//     },
//   });
//   return (
//     <>
//       {data?.fetchUseditemQuestions.map((el: any, index) =>
//         index !== myIndex ? (
//           <div key={el._id}>
//             <form onSubmit={handleSubmit(onClickAnswer)} id={el._id}>
//               <input type="text" {...register("contents")} />
//               <button>Answer Complete</button>
//             </form>
//           </div>
//         ) : (
//           <div></div>
//         )
//       )}
//     </>
//   );
// }
