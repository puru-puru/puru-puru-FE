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

  return invalidate;
}
