

import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from '../loading';

type Ts  ={
    id: number;
    title: string;
    body: string;
    tags: string[];
    userId: number;
    images: string[];
}

export default async function PostsPage() {
  let dummy =  'https://dummyjson.com/posts'
  let local = 'http://localhost:3000/api/posts'

    const response = await fetch('http://localhost:3000/api/posts?', {
    method: 'GET', 
  })

  if(!response){
    throw('error fetch')  
  }
  const {data} = await response.json();
  console.log(data)


 

  return (
    <>
    <h1 className='text-xl text-center p-4'>All Posts</h1>
   
    <div className='gap-4 flex-wrap flex p-5 bg-slate-700 justify-center'>
    <Suspense fallback={<Loading/>}>
        { data?.posts?.map((post: Ts) => (
            <div className=' flex bg-sky-200 p-4 w-80  flex-col gap-5 justify-between' key={post?.id}>
                <p className='text-black'  key={post?.id}>{post?.body}</p>
                <Link scroll={true} className='p-3 bg-sky-900 text-center' href={`/dashboard/posts/${post.id}`}>View More</Link>
            </div>
            ))}
      </Suspense>
    </div>
    </>
  )
}
 