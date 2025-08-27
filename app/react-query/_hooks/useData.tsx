"use client";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

function fetchUsers() {
  return axios
    .get("http://localhost:5000/users")
    .then((res) => res.data)
    .catch((err) => err.message);
}
function fetchProdcuts() {
  return axios
    .get("http://localhost:5000/products")
    .then((res) => res.data)
    .catch((err) => err.message);
}

const _queries = [
  { id: 1, key: "users", fn: fetchUsers },
  { id: 2, key: "products", fn: fetchProdcuts },
];

function useData() {
  const results = useQueries({
    queries: _queries.map((item: any) => ({
      queryKey: [item.key],
      queryFn: item.fn,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
  return results;
}

export default useData;
