import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { stringify } from "qs";

export function useRouter() {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RoutePath, search?: any) {
        navigate({
          pathname: path,
          search: search ? stringify(search, { indices: false }) : undefined,
        });
      },
      replace(path: RoutePath) {
        navigate({ pathname: path }, { replace: true });
      },
    };
  }, [navigate]);
}

export type RoutePath = "/signup" | "/mypage";
