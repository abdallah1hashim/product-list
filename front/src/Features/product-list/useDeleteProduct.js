import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/apiProducts";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { mutate };
}
