//& CLIENT SIDE FETCHER HOOK
import axios from "axios";
import useSWR from "swr";

//& HOOK
export default function useClientSideFetcher(url: string) {

  const fetcher = () => axios.get(url).then((res) => res.data);
  
  const { data, isLoading, error, mutate } = useSWR(url, fetcher);

  return { data, isLoading, error, mutate };


}
