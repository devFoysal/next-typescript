"use client"
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  )
}
