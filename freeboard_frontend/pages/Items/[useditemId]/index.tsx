import ItemDetail from "../../../src/components/units/usedItem/detail/ItemDetail.index";
import QuestionList from "../../../src/components/units/useditemQuestions/QuestionList/QuestionList.index";
import QuestionWrite from "../../../src/components/units/useditemQuestions/QuestionWrite/QuestionWrite.index";

export default function ItemDetailPage() {
  return (
    <>
      <ItemDetail />
      <QuestionWrite />
      <QuestionList />
    </>
  );
}
