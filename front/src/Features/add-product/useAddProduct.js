import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../../services/apiProducts";
import { useNavigate } from "react-router-dom";

export function useAddProduct() {
  const navigate = useNavigate();
  const { mutate, error } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.error(err?.response.data.message);
    },
  });

  return { mutate, error };
}
