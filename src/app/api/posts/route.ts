import { NextResponse } from "next/server";

export async function GET(request: Request){
  try {
    const response = await fetch("https://dummyjson.com/posts", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();



   
    return NextResponse.json({data});
  } catch (error ) {
   console.log(error)
  }
}
