import { Metadata } from "next";
export default async function generateMetaData({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = (await fetch(`https://example.api.com/${params.id}`)) as any;

  return {
    title: product.title,
    description: product.description,
    openGraph: { images: [product.image] },
  };
}
