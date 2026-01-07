// app/api/featured-products/route.ts
import { prisma } from "@/lib/db";

export async function GET() {
  const products = await prisma.product.findMany({
    where: { featured: true },
    take: 8,
  });

  return new Response(JSON.stringify(products), { status: 200 });
}
