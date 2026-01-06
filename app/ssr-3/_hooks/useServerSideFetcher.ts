interface Props {
  url: string;
  cache: "no-store" | "default" | "force-cache";
  revalidate?: number;
}

const useServerSideFetcher = (props: Props) => {
  return null;
};

export default useServerSideFetcher