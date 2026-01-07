"use client";

import { prisma } from "../lib/db";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  brand: string;
  images: string[];
  description: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/featured-products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-[450px]"
          >
            {/* Fixed image size, centered horizontally */}
            <div className="mb-4 h-[300px] w-[300px] flex justify-center">
              <Image
                src={
                  p?.images?.[0] || "https://i.postimg.cc/8Cws08LC/neymar.jpg"
                }
                alt={p.name}
                width={200}
                height={200}
                unoptimized
                className="object-contain"
              />
            </div>

            {/* Product info at bottom */}
            <div className="mt-auto text-left">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-600">{p.brand}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {p.description}
              </p>
              <p className="text-red-600 font-bold mt-2">৳ {p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
