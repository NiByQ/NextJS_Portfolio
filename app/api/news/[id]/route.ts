import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID is required" });
  }
  return NextResponse.json({ message: `Retrieved news item with ID: ${id}` });
}
