import { prisma } from "../lib/db";
import Link from "next/link";

export default async function FeaturedCategories() {
  const categories = await prisma.category.findMany({ take: 4 });

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="bg-gray-100 p-6 rounded-lg shadow-lg w-48 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
