import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Components: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("회원만 이용 가능합니다.");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <Components {...props} />;
};
