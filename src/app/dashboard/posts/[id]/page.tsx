'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Post = {
   
    title?: string,
    body?: string,
    brand: string,
    image?: string[]
}

export default function PostId({ params }: any) {
  const [post, setPost] = useState<Post | null>(null);

  const getPostById = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/posts/${params.id}`,{
      
      method: 'GET',
      next: {
      revalidate: 5000
      }
    }
      );

      if (response) {
        const {post} = await response.json();
        console.log(response)

        
        if (post) setPost(post);
      }else{
        console.log(response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById();
  }, []);

  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen">

    <ul role="list" className=" flex  p-6 divide-y divide-slate-200 bg-cyan-50 w-80 h-auto">
      <li className="flex py-4  ">
       
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">
            {post && post?.title}
          </p>
          <p className="text-sm text-slate-500 ">{post && post?.body}</p>
        </div>
      </li>
    </ul>
    <Link href='/dashboard/posts' className="p-3 bg-sky-500">All Posts</Link>
    </div>
  );
}
