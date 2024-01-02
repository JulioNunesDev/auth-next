import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const response = await fetch("https://dummyjson.com/posts", {
    method: "GET",
  });
  const data = await response.json();



  const { params } = context;

  return NextResponse.json({
    post: data.posts.find((d: any) => d.id.toString() === params.id),
  });
}
