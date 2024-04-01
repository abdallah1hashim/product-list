import { useQuery } from "@tanstack/react-query";
import { getProductsCollection } from "../../services/apiProducts";

export function useProductCollection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsCollection,
  });
  return { data, isLoading, isError };
}
