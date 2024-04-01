import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../../services/apiProducts";
import { useNavigate } from "react-router-dom";

export function useAddProduct() {
  const navigte = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      navigte("/");
    },
    onError: (err) => console.log("error", err),
  });
  return { mutate, isLoading };
}
