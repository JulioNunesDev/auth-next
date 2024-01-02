
import Header from '@/components/Header'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  const {userId} = auth()
    if(userId) {
    redirect('/dashboard')
    }
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Home Page</h1>
    </main>
  
  )
}
