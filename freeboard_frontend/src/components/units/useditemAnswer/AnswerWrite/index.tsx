import { useForm } from "react-hook-form";
import { useClickAnswer } from "../../../commons/hooks/customs/useClickAnswer";

export default function AnswerWrite() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <form>
      <input type="text" />
    </form>
  );
}
