import { NextResponse } from "next/server";

export async function GET() {
  const news = [
    {
      id: 1,
      title: "Breaking News: AI Revolutionizes Tech Industry",
      content:
        "Artificial Intelligence (AI) is transforming the technology landscape, enabling new innovations and improving efficiency across various sectors.",
    },
    {
      id: 2,
      title: "Global Markets Rally Amid Economic Recovery",
      content:
        "Stock markets around the world are showing strong gains as economic indicators point to a recovery in global trade and investment.",
    },
    {
      id: 3,
      title: "Climate Change: New Initiatives to Combat Global Warming",
      content:
        "Governments and organizations worldwide are launching new initiatives to address climate change and reduce carbon emissions.",
    },
  ];
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({ received: body });
}
