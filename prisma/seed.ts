import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // --- Categories ---
  const categories = [
    { name: "Laptops", slug: "laptops" },
    { name: "Desktops", slug: "desktops" },
    { name: "Monitors", slug: "monitors" },
    { name: "Phone", slug: "phone" },
  ];

  const categoryMap: Record<string, string> = {};

  for (const cat of categories) {
    const c = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
    categoryMap[cat.slug] = c.id;
  }

  // --- Brands ---
  const brands = [
    { name: "Dell", slug: "dell" },
    { name: "HP", slug: "hp" },
    { name: "Asus", slug: "asus" },
    { name: "Apple", slug: "apple" },
  ];

  const brandMap: Record<string, string> = {};
  for (const b of brands) {
    const brand = await prisma.brand.upsert({
      where: { slug: b.slug },
      update: {},
      create: b,
    });
    brandMap[b.slug] = brand.id;
  }

  // --- Products ---
  const products = [
    {
      name: "Dell Inspiron 15",
      slug: "dell-inspiron-15",
      price: 65000,
      oldPrice: 70000,
      description: "Dell Inspiron 15 Laptop with Intel i5",
      specifications: { ram: "8GB", storage: "512GB SSD" },
      categorySlug: "laptops",
      brandSlug: "dell",
      stock: 20,
      images: [
        "https://i.postimg.cc/8Cws08LC/neymar.jpg",
      ],
      featured: true,
    },
    {
      name: "HP Pavilion Desktop",
      slug: "hp-pavilion-desktop",
      price: 85000,
      oldPrice: 90000,
      description: "HP Pavilion Desktop with Intel i7",
      specifications: { ram: "16GB", storage: "1TB SSD" },
      categorySlug: "desktops",
      brandSlug: "hp",
      stock: 15,
      images: [
        "https://i.postimg.cc/8Cws08LC/neymar.jpg",
      ],
      featured: false,
    },
    {
      name: "Asus VG245H Monitor",
      slug: "asus-vg245h-monitor",
      price: 22000,
      oldPrice: 25000,
      description: "Asus 24-inch Full HD Monitor",
      specifications: { resolution: "1920x1080", refreshRate: "75Hz" },
      categorySlug: "monitors",
      brandSlug: "asus",
      stock: 30,
      images: [
        "https://i.postimg.cc/8Cws08LC/neymar.jpg",
      ],
      featured: true,
    },
    {
      name: "iPhone 14",
      slug: "iphone-14",
      price: 120000,
      oldPrice: 130000,
      description: "Apple iPhone 14 Smartphone",
      specifications: { storage: "128GB", ram: "6GB" },
      categorySlug: "phone",
      brandSlug: "apple",
      stock: 25,
      images: [
        "https://i.postimg.cc/8Cws08LC/neymar.jpg",
      ],
      featured: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        price: product.price,
        oldPrice: product.oldPrice,
        description: product.description,
        specifications: product.specifications,
        stock: product.stock,
        images: product.images || [
          "https://i.postimg.cc/8Cws08LC/neymar.jpg",
        ],
        featured: product.featured,
        category: { connect: { id: categoryMap[product.categorySlug] } },
        brand: product.brandSlug, // string as per schema
      },
    });
  }

  console.log("Seeding finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
