// app/products/[slug]/page.tsx
import { prisma } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true, brand: true },
  });

  if (!product) notFound();

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-4">{product.brand}</p>
      <div className="flex gap-4">
        {product.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={product.name}
            width={300}
            height={300}
            unoptimized
          />
        ))}
      </div>
      <p className="mt-4 text-red-600 font-bold">৳ {product.price}</p>
      <p className="mt-2">{product.description}</p>
    </section>
  );
}
