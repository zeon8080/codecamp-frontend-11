import { useAuth } from "../../../src/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage(): JSX.Element {
  useAuth();

  return <div>프로필 페이지입니다.</div>;
}
