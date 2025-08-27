import { useQuery, keepPreviousData } from "@tanstack/react-query";

const useFetchUsers = (page: number) => {
  return useQuery({
    queryKey: ["repoData", page],
    queryFn: () => fetch(`http://localhost:5000/users?_page=${page}&_per_page=3`).then((res) => res.json()),
    // staleTime: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 5000,
    // refetchOnReconnect: true,
    placeholderData: keepPreviousData,
    select: (data) => {
      return data?.data.map((item: any) => ({
        ...item,
        name: item.name.toUpperCase(),
        age: "$" + (item.age * 1000).toLocaleString(),
      }));
    },
  });
};

export default useFetchUsers;
