import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import Loading from './loading'
import Menu from '@/components/Header/Menu'

export default function DashBoardPage() {
    
  return (
    
    <div className='flex-col min-h-screen items-center justify-between p-5 bg-slate-800'>
        <h1 className='text-white text-center text-xl'>DashBoard Page</h1>
       
        <div className=' w-40 h-36 flex justify-center items-center '  >
          <Link className='rounded bg-blue-500 p-3' href='/dashboard/posts'>Lista de Postagens</Link>
        </div>
      
    </div>
    
  )
}
