import { useQueryClient, QueryKey } from "@tanstack/react-query";

export function useInvalidateQueries() {
  const queryClient = useQueryClient();

  const invalidate = (...queryKeys: QueryKey[]) => {
    queryKeys.forEach((queryKey) => {
      queryClient.invalidateQueries({
        queryKey,
      });
    });
  };
//간편한 캐시 관리, UI 업데이트 및 데이터 동기화, 성능 향상, 일관된 데이터 관리
  return invalidate;
}
