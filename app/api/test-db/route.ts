import { prisma } from "@/lib/db"; // adjust relative path
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json({ success: true, data: categories });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
