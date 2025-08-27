import BackButton from "@/components/BackButton";
import CustomPageButton from "@/components/CustomPageButton";
import React, { Suspense } from "react";

const DynamicProductPage = async ({ params }: any) => {
  const req = fetch(`https://fakestoreapi.com/products/${params.productID}`, { cache: "force-cache" });
  const product = await req.then((res) => res.json());

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-center">Dynamic Product Page</h1>
      <div className="card mx-auto my-10 w-fit p-4 rounded border-4 border-pink-500 bg-zinc-300 text-black flex flex-col justify-center items-center font-black text-2xl gap-4">
        <h2>
          {product.id} . {product.title.slice(0, 10)}
        </h2>
        <Suspense fallback={<p>Loading...</p>}>
          <img src={product.image} alt="image" className="w-32 h-32" width={100} height={100} />
        </Suspense>
      </div>
      <CustomPageButton />
      <BackButton />
    </section>
  );
};

export default DynamicProductPage;
